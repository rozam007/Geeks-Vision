import React, { useState, useEffect, useRef } from "react";
import { AccordionItemProps } from "@/types";
import styles from "./contact.module.css";

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  title,
  content,
  isOpen,
  prevOpen,
  onToggle = () => {},
}) => {
  const [animateBorder, setAnimateBorder] = useState(false);

  const [height, setHeight] = useState<number | string>(0);

  const contentRef = useRef<HTMLDivElement>(null);
  const active = "text-themeColor";

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        if (isOpen && contentRef.current) {
          setHeight(contentHeight);
        } else {
          setHeight(0);
        }
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [isOpen]);

  useEffect(() => {
    if (prevOpen) {
      setAnimateBorder(true);
      const timer = setTimeout(() => {
        setAnimateBorder(false);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [prevOpen]);

  return (
    <div className={`border-b border-bdrColor`}>
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none pt-[25px] pb-5 px-5"
        onClick={() => onToggle(id)}
      >
        <span
          className={`font-semibold text-xl capitalize bg-transparent ${
            isOpen ? active : "text-whiteColor"
          } }`}
        >
          {title}
        </span>
        <svg
          className={`w-6 h-6 transition-transform duration-200`}
          fill="black"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              className="text-themeColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 12H6"
            />
          ) : (
            <path
              className="text-bdrColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v12M6 12h12"
            />
          )}
        </svg>
      </button>

      <div
        className={`relative overflow-hidden transition-all duration-700`}
        style={{ height: isOpen ? `${height}px` : "0px" }}
      >
        {isOpen && (
          <div
            ref={contentRef}
            className={`absolute left-0 top-0 w-full font-normal text-[15px] text-paraColor leading-[30px] tracking-[.03em] pt-5 pb-[30px] px-5 
               ${animateBorder ? styles.showBorderTop : ""}
              `}
          >
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionItem;
