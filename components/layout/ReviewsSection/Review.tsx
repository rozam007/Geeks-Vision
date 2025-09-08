import styles from "./Review.module.css";
import Ratings from "./Ratings";
import Stats from "./Stats";

const Review: React.FC = () => {
  return (
    <div className={styles.reviewSection}>
      <Ratings />
      <Stats />
    </div>
  );
};

export default Review;
