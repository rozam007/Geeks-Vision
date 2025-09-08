import { SectionTitleProps } from "@/types";
const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div
      className="title mb-[55px] relative lg:h-[90px] flex items-end justify-center text-center"
      data-aos="fade-up"
    >
      <span className="hidden lg:block font-bold w-full absolute left-1/2 bottom-0 transform -translate-x-1/2 leading-none text-[60px] md:text-[80px] lg:text-[110px] text-themeColor opacity-[.03] uppercase">
        {title}
      </span>
      <h2 className="font-bold text-[40px] sm:text-[60px]">{subtitle}</h2>
    </div>
  );
};

export default SectionTitle;
