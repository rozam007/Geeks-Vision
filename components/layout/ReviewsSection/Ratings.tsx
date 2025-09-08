import React from "react";
import google from "/public/google.svg";
import trustPilot from "/public/trustpilot.svg";
import ReviewCard from "./ReviewCard";
import styles from "./Review.module.css";

const Ratings: React.FC = () => {
  return (
    <div
      className={`${styles.customerReviews} py-12 px-20 w-full max-w-[545px] bg-no-repeat bg-cover`}
      style={{ backgroundImage: "url(/review-bg.png)" }}
    >
      {/* <h6 className="text-18 mb-2">Review On</h6> */}
      <div className={styles.reviewWrapper}>
        {/* <ReviewCard logo={trustPilot} rating={5} /> */}
        {/* <ReviewCard logo={google} rating={5} /> */}
      </div>
    </div>
  );
};

export default Ratings;
