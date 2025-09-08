import React, { ChangeEvent, useCallback, useState } from "react";
import InputElement from "@/components/common/InputElement";
import { FormField, FormStates } from "@/types";
import { initialStates } from "@/data";
import validateField from "@/lib/form validations/index";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import LinkBtn from "@/components/common/LinkBtn";
import styles from "./contact.module.css";

const Form: React.FC<FormField> = ({ input }) => {
  const formErrorsInitialState = {
    firstname: false,
    lastname: false,
    company: false,
    email: false,
    phone: false,
    message: false,
  };

  const [val, setValue] = useState<FormStates>(initialStates || {});
  const [formError, setFormError] = useState<{ [key: string]: boolean }>(
    formErrorsInitialState
  );
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setValue((prevVal) => ({
        ...prevVal,
        [name]: value,
      }));

      if (submitted) {
        const errorState = validateField(name, value);
        setFormError((prev) => ({ ...prev, [name]: !!errorState }));
      }
    },
    [submitted]
  );

  const validateForm = () => {
    let hasErrors = false;
    const errors: { [key: string]: boolean } = {};

    for (let key in formErrorsInitialState) {
      const fault = validateField(key, val[key] || "");
      if (fault) {
        hasErrors = true;
        errors[key] = true;
      } else {
        errors[key] = false;
      }
    }

    setFormError(errors);
    return hasErrors;
  };

  const resetForm = () => {
    setValue(initialStates);
    setFormError(formErrorsInitialState);
    setSubmitted(false);
  };

  const sendEmail = () => {
    const serviceId = `${process.env.NEXT_PUBLIC_SERVICE_ID}` as string;
    const templateId = `${process.env.NEXT_PUBLIC_TEMPLATE_ID}` as string;
    const publicKey = `${process.env.NEXT_PUBLIC_USER_KEY}` as string;

    emailjs
      .send(
        serviceId,
        templateId,
        {
          firstname: val.firstname,
          lastname: val.lastname,
          company: val.company,
          phone: val.phone,
          message: val.message,
          from_name: `${val.firstname}  ${val.lastname}`,
          from_email: val.email,
          to_name: "Rozam Tanveer",
        },
        publicKey
      )
      .then((response) => {
        console.log(`Email Succesfully Send`, response);
        toast.success(`Email sent successfully`);
      }),
      (error: string) => {
        console.log(`Failed to send`, error);
      };
  };

  const submitHandler = () => {
    setSubmitted(true);
    const hasErrors = validateForm();

    if (!hasErrors) {
      sendEmail();
      console.log("submitted!", val);
      resetForm();
    } else {
      toast.error("Please Fill All the Fields Correctly.");
      console.log("errors", formError);
    }
  };

  return (
    <div className={`${styles.form} ml-0 lg:ml-[25px] rounded-lg`}>
      <div className="p-[25px] border-b border-fieldBorder">
        <h5 className="text-[26px] text-center font-medium">
          Make a Free Consulting
        </h5>
      </div>
      <div className="py-10 px-6 xl:px-[45px]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-6">
          {input.map((input) => {
            const value = val[input.name] || ""; // Ensure default value is defined
            const { id, name, type, label, required } = input;
            const error = formError[name] || false; // Ensure default value is defined
            const errorMessage = validateField(name, value); // Get validation message

            const setBorder =
              type === "number"
                ? "border-fieldBorder"
                : !submitted
                ? "border-fieldBorder"
                : error
                ? "border-red-500"
                : "border-themeColor";

            return (
              <div
                key={id}
                className={` ${
                  name === "firstname" || name === "lastname"
                    ? "col-span-2 md:col-span-1"
                    : "col-span-2"
                }`}
              >
                <InputElement
                  // id={id}
                  name={name}
                  type={type}
                  label={label}
                  required={required}
                  value={value}
                  handleChange={handleChange}
                  isError={error}
                  errorText={errorMessage}
                  className={`${setBorder}`}
                  submitted={submitted}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-[26px]">
          <LinkBtn
            href="#contact"
            title="Submit"
            size="xl"
            font="large"
            variant="primary"
            onClick={submitHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
