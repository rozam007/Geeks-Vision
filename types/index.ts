import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

import Swiper from "swiper";

export interface NavItems {
  label: string;
  link: string;
}

export interface SideNavProps {
  status: boolean;
  setStatus: (val: boolean) => void;
}

export interface SocialMediaPlatform {
  title: string;
  url: string;
  icon: React.ElementType;
}

export interface SocialMediaLinks {
  [platform: string]: SocialMediaPlatform;
}
export interface Links {
  text: string;
  url: string;
}
export interface Footerlinks {
  ourSolutions: Links[];
  company: Links[];
  // resources: Links[];
}
export interface Footer {
  link: Footerlinks;
}

export interface FooterDataProps {
  category: keyof Footerlinks;
}

export interface AccordionItemProps {
  id: number;
  title: string;
  content: string;
  isOpen?: boolean;
  prevOpen?: number | null;
  onToggle?: (id: number) => void;
}

export interface AccordionProps {
  items: AccordionItemProps[];
}

export interface FormInputs {
  id: number;
  name: string;
  type: string;
  label: string;
  required: boolean;
}
export interface FormField {
  input: FormInputs[];
}
export type Validate<T> = {
  [key in keyof T]?: string | undefined;
};

export interface FormStates {
  [key: string]: string;
}

export interface FormInputProps {
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  // id: number;
  name: string;
  type: string;
  label: string;
  required: boolean;
  value: string;
  isError: boolean;
  errorText: string;
  className: string;
  submitted: boolean;
}

export interface HeadingProps {
  size: string;
  weight:
    | "thin"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
}

export interface ToastProps {
  type: "success" | "error";
  message: string;
}

export interface LinkProps {
  href: string;
  title: string;
  variant?: "primary" | "secondary";
  size?: "medium" | "large" | "full-width" | "small" | "xl";
  font?: "default" | "large" | "small";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface NavLinksProps {
  activeLink: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface LogoTitleSwitcherProps {
  interval?: number;
  logoWidth: number;
  logoHeight: number;
  titleWidth: number;
  titleHeight: number;
  divWidth: number;
  divHeight: number;
}
export interface useToggleProps {
  initialState?: boolean;
  interval?: number;
}

export interface StatsData {
  value: string;
  label: string;
  description: string;
}

export interface ReviewCardProps {
  logo: StaticImageData;
  rating: number;
}

export interface Services {
  id: number;
  title: string;
  description: string;
}

export interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export interface ContentInterface {
  icon: StaticImageData;
  heading: string;
  paragraph: string;
}

export interface ContentProps {
  content: ContentInterface[];
}

export interface StrategyProps {
  icon: IconType;
  title: string;
}

export interface Strategy {
  element: StrategyProps[];
}

export interface AboutStats {
  title: string;
  progress: string;
  description: string;
}

export interface ClientItems {
  id: number;
  rating: number;
  paragraph: string;
  name: string;
  company?: string;
  // userimage: StaticImageData;
  date: string;
  time: string;
}

export interface ClientProps {
  entries: ClientItems[];
  changeSlide: (swiper: Swiper) => void;
}

export interface ProjectItems {
  id: number;
  image: StaticImageData;
  title: string;
  projectname: string;
  icon: IconType;
}

export interface ProjectProps {
  data: ProjectItems[];
  changeSlide: (swiper: Swiper) => void;
  prev: () => void;
  next: () => void;
}

export interface ModalItems {
  id: number;
  modalImage: StaticImageData;
  firstheading: string;
  overviewdescritpion: string;
  // secondheading: string;
  // featuresdescription: string;
  thirdheading: string;
  techdescriptions: string;
}

export interface ModalProps {
  items: ModalItems[]
  slideId: number | null;
  isOpen: boolean;
  onClose: () => void;
}
