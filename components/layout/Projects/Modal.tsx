import React, { useState, useEffect, useRef } from "react";
import styles from "./project.module.css";
import { ModalProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal: React.FC<ModalProps> = ({ slideId, items, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isNestedModalOpen, setIsNestedModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      document.body.classList.add(styles.noScroll);
    } else if (!isOpen && shouldRender) {
      setIsClosing(true);
      setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
        setIsNestedModalOpen(false);
        document.body.classList.remove(styles.noScroll);
      }, 500);
    }
  }, [isOpen, shouldRender]);

  useEffect(() => {
    if (!isOpen) {
      setActiveTab(1);
    }
  }, [isOpen]);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsClosing(true);
      setTimeout(() => {
        onClose();
        setShouldRender(false);
        setIsClosing(false);
        setIsNestedModalOpen(false);
        document.body.classList.remove(styles.noScroll);
      }, 500);
    }
  };

  if (!shouldRender) return null;

  const item = items.find((item) => item.id === slideId);

  if (!item) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 pt-5 bg-modalColor bg-opacity-75
        ${isClosing ? `${styles.overlayExit}` : `${styles.overlayEnter}`}
        `}
      onClick={handleBackgroundClick}
    >
      <div
        className={`${
          styles.projects
        } rounded-md shadow-lg h-auto w-full sm:w-[86%] xl:w-5/6 xxl:w-3/4 p-3 sm:p-6 relative ${
          isClosing ? `${styles.modalExit}` : `${styles.modalEnter}`
        }`}
      >
        <div className="absolute right-3 -top-2 sm:-right-10 lg:-right-12 sm:-top-6 mx-auto max-w-lg">
          <div className="mt-6 sm:flex justify-end items-center sm:gap-4">
            <Link
              href="#projects"
              className="mt-2 text-[40px] lg:text-5xl text-themeColor sm:mt-0 sm:w-auto hover:text-rose-600"
              onClick={() => {
                setIsClosing(true);
                setTimeout(() => {
                  onClose();
                  setShouldRender(false);
                  setIsClosing(false);
                  document.body.classList.remove(styles.noScroll);
                }, 500);
              }}
            >
              <IoIosCloseCircleOutline />
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-6 xxl:gap-10 h-full">
          <div className="w-full lg:w-1/2 flex-shrink-0 h-auto max-h-[35vh] sm:max-h-[30vh] md:max-h-[35vh] lg:max-h-[50vh] overflow-hidden">
            <Image
              src={item.modalImage}
              alt="project-image"
              className="w-full h-full object-contain cursor-pointer"
              onClick={() => setIsNestedModalOpen(true)}
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col h-auto max-h-[30vh] sm:max-h-[30vh] md:max-h-[35vh] lg:max-h-[50vh] overflow-y-auto">
            <div
              className={`flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 ${styles.tabBar}`}
            >
              <button
                className={`py-2 px-4 text-xs sm:text-sm md:text-base ${
                  activeTab === 1
                    ? "bg-themeColor text-whiteColor"
                    : "bg-gray-200 text-gray-600"
                } ${styles.tabButton}`}
                onClick={() => setActiveTab(1)}
              >
                {item.firstheading}
              </button>
              {/* <button
                className={`py-2 px-4 text-xs sm:text-sm md:text-base ${
                  activeTab === 2
                    ? "bg-themeColor text-whiteColor"
                    : "bg-gray-200 text-gray-600"
                } ${styles.tabButton}`}
                onClick={() => setActiveTab(2)}
              >
                {item.secondheading}
              </button> */}
              <button
                className={`py-2 px-4 text-xs sm:text-sm md:text-base ${
                  activeTab === 3
                    ? "bg-themeColor text-whiteColor"
                    : "bg-gray-200 text-gray-600"
                } ${styles.tabButton}`}
                onClick={() => setActiveTab(3)}
              >
                {item.thirdheading}
              </button>
            </div>

            <div className="flex-1 xl:mt-4 pr-3 py-4 overflow-y-auto">
              {activeTab === 1 && (
                <div>
                  <p className="font-light text-xs sm:text-[15px] md:text-base leading-8 tracking-[.03em] text-paraColor mb-0">
                    {item.overviewdescritpion}
                  </p>
                </div>
              )}
              {/* {activeTab === 2 && (
                <div>
                  <p className="font-light text-xs sm:text-[15px] md:text-base leading-8 tracking-[.03em] text-paraColor mb-0">
                    {item.featuresdescription}
                  </p>
                </div>
              )} */}
              {activeTab === 3 && (
                <div>
                  <p className="font-light text-xs sm:text-[15px] md:text-base leading-8 tracking-[.03em] text-paraColor mb-0">
                    {item.techdescriptions}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {isNestedModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center z-[1000] bg-modalColor bg-opacity-90"
            onClick={() => setIsNestedModalOpen(false)}
          >
            <div className="relative max-h-[80vh]">
              <Image
                src={item.modalImage}
                alt="project-image-fullscreen"
                className="max-w-full max-h-full object-contain"
              />
              <button
                className="absolute top-2 right-4 mt-2 text-[40px] lg:text-5xl text-themeColor sm:mt-0 sm:w-auto hover:text-rose-600"
                onClick={() => setIsNestedModalOpen(false)}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
