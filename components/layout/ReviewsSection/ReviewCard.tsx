import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { ReviewCardProps } from "@/types";
import styles from "./Review.module.css";

const ReviewCard: React.FC<ReviewCardProps> = ({ logo, rating }) => {
  // Generate stars based on rating
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} color="#FFD700" size={10} />);
  }

  return (
    <div className={styles.review}>
      <Image src={logo} alt="logo" className="mb-2" />
      <ul className="flex gap-1 items-center">
        {stars}
        <li className="text-[14px]">{rating}.0/5.0</li>
      </ul>
    </div>
  );
};

export default ReviewCard;
