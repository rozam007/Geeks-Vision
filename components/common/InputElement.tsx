import React from "react";
import { FormInputProps } from "@/types";
import classNames from "classnames";

const InputElement: React.FC<FormInputProps> = ({
  // id,
  name,
  type,
  label,
  required,
  value,
  handleChange,
  isError,
  errorText,
  className, // Destructure className prop
  submitted,
}) => {


 
  return (
    <div className="">
      <div className="flex flex-col">
        <label
          className={`font-medium text-sm mb-2 capitalize tracking-[.02em] ${
            isError && errorText ? "text-red-500" : "text-whiteColor"
          }`}
        >

          {label}
        </label>

       
        { name !== "message" ? (
          <div className="">
            <input
              type={type}
              name={name}
              className={`h-[41px] font-normal bg-fieldBg text-fieldColor rounded-[5px] text-sm px-[15px] py-[10px] w-full focus:outline-none border ${classNames(
                className
              )}
`}
              value={value}
              required={required}
              onChange={(event) => handleChange(event)}
            />
          </div>
        ) : (
          <div className="">
            <textarea
              name={name}
              className={` bg-fieldBg rounded-[5px] text-fieldColor text-sm px-[15px] py-[10px] w-full focus:outline-none border ${classNames(
                className
              )}`}
              value={value}
              required={required}
              rows={6}
              onChange={(event) => handleChange(event)}
            />
          </div>
        )}
        </div>
     

      {isError && <p className="text-red-500 pt-2 text-xs xxl:text-sm text-end">{errorText}</p>}
    </div>
  );
};
export default InputElement;
