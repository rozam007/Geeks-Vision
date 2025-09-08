import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";
import Link from "next/link";
import { LinkProps } from "@/types";

const LinkBtn: React.FC<LinkProps> = ({
  href,
  title,
  variant = "primary",
  size = "medium",
  font = "default",
  onClick,
}) => {
  return (
    <Link
      href={href}
      className={classNames(
        styles.link,
        styles[variant],
        styles[`size-${size}`],
        styles[`font-${font}`]
      )}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default LinkBtn;
