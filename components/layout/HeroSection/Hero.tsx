import styles from "./Hero.module.css";
import SocialLinks from "./HeroSocialLinks";
import HeroContent from "./HeroContent";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className={`${styles.hero} pl-[15px] pt-[86px] sm:pl-[30px] xl:pl-[80px] xxl:pl-[120px]`}
    >
      <div className="hero-section">
        <SocialLinks />
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
