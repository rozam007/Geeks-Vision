import { Footer } from "@/types";
import { FormInputs } from "@/types";

import {
  facebook,
  twitter,
  linkdin,
  instagram,
  octagone,
  arrowRight,
} from "@/Icons";

import {
  NavItems,
  SocialMediaLinks,
  ContactInfo,
  StatsData,
  Services,
  AboutStats,
} from "@/types/index";

import research from "../public/research.svg";
import expert from "../public/expert.svg";
import quality from "../public/quality.svg";

import project1 from "/public/project01.svg";
import project2 from "/public/project02.svg";
import project3 from "/public/project03.svg";
import project4 from "/public/project04.svg";
import project5 from "/public/project05.svg";
import btms from "/public/btms.svg"
import carsale from "/public/carsale.svg"
import scoprichie from "/public/scoprichiethumbnail.svg"
import carsaleBackend from "/public/carsaleBackend.svg"
import carsaleAdmin from "/public/carsaleAdmin.svg"

// import model1 from "/public/model01.svg";
// import model2 from "/public/model02.svg";
import model3 from "/public/model03.svg";
import model4 from "/public/model04.svg";
import model5 from "/public/model05.svg";
import model6 from "/public/prj.svg";
import model7 from "/public/po.svg";

const footer: Footer = {
  link: {
    ourSolutions: [
      { text: "Web Development", url: "/" },
      { text: "Cloud Services", url: "/" },
      { text: "Software Development", url: "/" },
      { text: "Mobile App Development", url: "/" },
    ],
    company: [
      { text: "About Us", url: "#about" },
      { text: "Projects", url: "#projects" },
      // { text: "Our Team", url: "/" },
      // { text: "All Portfolio", url: "/" },
    ],
    // resources: [
    //   { text: "Support Area", url: "/" },
    //   { text: "Support Policy", url: "/" },
    //   { text: "Terms & Conditions", url: "/" },
    //   { text: "Privacy Policy", url: "/" },
    //   { text: "Career", url: "/" },
    //   { text: "Pricing Plan", url: "/" },
    // ],
  },
};

export default footer;

export const accordionItems = [
  {
    id: 1,
    title: "Step 01",
    content:
      "Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. placerat felis non aliquam.",
  },
  {
    id: 2,
    title: "Step 02",
    content:
      "Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. placerat felis non aliquam.",
  },
  {
    id: 3,
    title: "Step 03",
    content:
      "Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. placerat felis non aliquam.",
  },
];

export const navItems: NavItems[] = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Services", link: "#services" },
  { label: "Projects", link: "#projects" },
];

export const initialStates = {
  firstname: "",
  lastname: "",
  Company: "",
  email: "",
  phone: "",
  message: "",
};

export const inputs: FormInputs[] = [
  {
    id: 1,
    name: "firstname",
    type: "text",
    label: "First Name",
    required: true,
  },
  {
    id: 2,
    name: "lastname",
    type: "text",
    label: "Last Name",
    required: true,
  },
  {
    id: 3,
    name: "company",
    type: "text",
    label: "Company/Organization",
    required: true,
  },
  {
    id: 4,
    name: "email",
    type: "text",
    label: "Email",
    required: true,
  },
  {
    id: 5,
    name: "phone",
    type: "number",
    label: "Phone",
    required: false,
  },
  {
    id: 6,
    name: "message",
    type: "text",
    label: "Message",
    required: true,
  },
];

export const socialMediaLinks: SocialMediaLinks = {
  Facebook: {
    title: "Facebook",
    url: "https://www.facebook.com/YourPageHere",
    icon: facebook,
  },
  Twitter: {
    title: "Twitter",
    url: "https://twitter.com/YourPageHere",
    icon: twitter,
  },
  Pinterest: {
    title: "Linkedin",
    url: "https://www.linkedin.com/company/geeksvision/",
    icon: linkdin,
  },
  Instagram: {
    title: "Instagram",
    url: "https://www.instagram.com/YourPageHere",
    icon: instagram,
  },
};

export const contactInfo: ContactInfo = {
  // address: "83A-C Master City, GRW, Pakistan",
  address: "Dallas, Texas, United States",
  // phone: "+92-347-709-9404",
  phone: "+92-340-1453-068",
  email: "info@geeksvision.com",
};

export const statsData: StatsData[] = [
  {
    value: "5",
    label: "Years",
    description: "Working With Passion",
  },
  {
    value: "100%",
    label: "Satisfied",
    description: "Customer",
  },
  // {
  //   value: "800",
  //   label: "Project",
  //   description: "We Have Completed",
  // },
  // {
  //   value: "15",
  //   label: "Awards",
  //   description: "Achievement For Service",
  // },
];

export const services: Services[] = [
  {
    id: 1,
    title: "Web Dev",
    description:
      "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.",
  },
  {
    id: 2,
    title: "Cloud Solutions",
    description:
      "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.",
  },
  {
    id: 3,
    title: "Back-End Dev",
    description:
      "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.",
  },
  {
    id: 4,
    title: "Front-End Dev",
    description:
      "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.",
  },
  // {
  //   id: 5,
  //   title: "Blockchain",
  //   description:
  //     "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.",
  // },
];

export const content = [
  {
    icon: research,
    heading: "Research & Discovery",
    paragraph:
      "Web development is the process offer than operdol creating otar eros augue, ultricies sedatoni quamot authol websites and web. creatingot otar erosmont augue, ultricies sed.",
  },
  {
    icon: expert,
    heading: "Industry Expertise",
    paragraph:
      "Web development is the process offer than operdol creating otar eros augue, ultricies sedatoni quamot authol websites and web. creatingot otar erosmont augue, ultricies sed.",
  },
  {
    icon: quality,
    heading: "Quality Assurance",
    paragraph:
      "Web development is the process offer than operdol creating otar eros augue, ultricies sedatoni quamot authol websites and web. creatingot otar erosmont augue, ultricies sed.",
  },
];

export const strategies = [
  { icon: octagone, title: "Creative Strategy" },
  { icon: octagone, title: "Rebranding Design" },
  { icon: octagone, title: "Unique Production" },
  { icon: octagone, title: "Corporate Identity" },
];

export const about_stats: AboutStats[] = [
  {
    title: "Strategy",
    progress: "70%",
    description:
      "Morbi interdum pellentesque nunc, luctus pretium nulla eget luctus at. Aliquam cursus nunc arcu",
  },
  {
    title: "Audience",
    progress: "98%",
    description:
      "Morbi interdum pellentesque nunc, luctus pretium nulla eget luctus at. Aliquam cursus nunc arcu",
  },
  {
    title: "Keyword",
    progress: "85%",
    description:
      "Morbi interdum pellentesque nunc, luctus pretium nulla eget luctus at. Aliquam cursus nunc arcu",
  },
];

export const clients = [
  {
    id: 1,
    rating: 5,
    paragraph:
      "“One of the best developers I have ever worked with. Very talented, fast-responsive, and with great performance. If you're looking for a long-term, stable developer for your project, don't hesitate to hire Geeks Vision! We'll definitely work with them again!”",
    name: "Michael Johnson",
    company: "",
    date: "May 9, 2023",
    time: "10:35 PM",
  },
  {
    id: 2,
    rating: 4,
    paragraph:
      "“Geeks Vision completed the project 100%. They provided great solutions and were incredibly resourceful. A clever and reliable team!”",
    name: "Emily Davis",
    company: "",
    date: "October 15, 2023",
    time: "8:00 AM",
  },
  {
    id: 3,
    rating: 5,
    paragraph:
      "“I had the honor to work with Geeks Vision for developing my web app, and I couldn’t be happier. The team combines technical and business skills, making them ideal for any project. They went above and beyond, offering suggestions and delivering more than promised. Communication was excellent, availability was unmatched, and they maintained complete honesty throughout. Finding a team like Geeks Vision, with such skilled backend developers, is rare. Beyond their expertise, they’re just great human beings. I wholeheartedly recommend them. You won’t be disappointed! I hope my project succeeds so I can work with them again. Thanks for everything!”",
    name: "Christopher Miller",
    company: "",
    date: "Feb 23, 2024",
    time: "1:15 PM",
  },
  // {
  //   id: 4,
  //   rating: 4,
  //   paragraph:
  //     "“Geeks Vision delivered exceptional Solidity work for our company. The team is sharp and not only followed the architecture for a complex workflow smart contract but also made valuable improvements. The project involved partial ownership requiring approval from a third-party legal entity, and they handled it seamlessly. We will definitely seek their guidance for future smart contract and blockchain projects!”",
  //   name: "William Dovrak",
  //   company: "CEO MVP Eng",
  //   date: "Feb 23, 2024",
  //   time: "1:15 PM",
  // },
  {
    id: 5,
    rating: 5,
    paragraph:
      "“All work was completed successfully. It was a pleasure working with Geeks Vision team of true professionals. Looking forward to working together again soon!”",
    name: "Olivia Anderson",
    company: "",
    date: "Feb 23, 2024",
    time: "1:15 PM",
  },
  {
    id: 6,
    rating: 4,
    paragraph:
      "“This is my second time working with Geeks Vision, and they always deliver excellent results. Highly recommended!”",
    name: "Daniel Thompson",
    company: "",
    date: "Feb 27, 2024",
    time: "3:15 PM",
  },
  {
    id: 7,
    rating: 5,
    paragraph:
      "“Geeks Vision truly understood my requirements and delivered fast. I highly recommend working with them!”",
    name: "Ethan Reynolds",
    company: "",
    date: "Feb 23, 2024",
    time: "1:15 PM",
  },
];

export const projects = [
  {
    id: 1,
    image: btms,
    title: "Web Application",
    projectname: "Human Resource Management System",
    icon: arrowRight,
  },
  {
    id: 2,
    image: carsale,
    title: "Web Application",
    projectname: "Carsale",
    icon: arrowRight,
  },
  {
    id: 3,
    image: carsaleAdmin,
    title: "Web Application",
    projectname: "Carsale Admin",
    icon: arrowRight,
  },
  {
    id: 4,
    image: carsaleBackend,
    title: "Web Application",
    projectname: "Carsale Backend",
    icon: arrowRight,
  },
  {
    id: 5,
    image: carsale,
    title: "Web3 Blockchain",
    projectname: "Initial Coin Offering",
    icon: arrowRight,
  },
    {
    id: 6,
    image: carsale,
    title: "Web Application",
    projectname: "Investigation App",
    icon: arrowRight,
  },
];

export const modal = [
  {
    id: 1,
    modalImage: btms,
    firstheading: "Overview",
    overviewdescritpion: "The HRMS is a comprehensive solution automating employee profiles, attendance, payroll, recruitment, and performance evaluations. It streamlines workforce management with structured request forms for leaves, reimbursements, and overtime. The system automates financial tracking, client/vendor invoicing, and recruitment workflows while integrating candidate assessments. Additionally, it features an employee evaluation platform, empowering managers with data-driven insights for salary increments and career growth.",
    // secondheading: "Features",
    // featuresdescription: "Good, healthy and fit",
    thirdheading: "Technologies",
    techdescriptions: "React.js, javascript, material ui, redux, react queries, axios, react charts, and JWT authentication.",
  },

  
  {
    id: 2,
    modalImage: carsale,
    firstheading: "Overview",
    overviewdescritpion: "The Carsale User Frontend provides a seamless vehicle browsing experience. Users can explore and filter vehicles, register via OTP, manage wishlists, leave reviews, track recently viewed vehicles, and contact showroom owners via WhatsApp. Geolocation detects the user’s country for relevant listings.",
    // secondheading: "Features",
    // featuresdescription: "Good, healthy and fit",
    thirdheading: "Technologies",
    techdescriptions: "Next.js, React.js, TailwindCSS, React Redux, React Queries, React Hook Forms, JWT authentication, Cloudinary for images and optimized API calls for performance.",
  },
    {
    id: 3,
    modalImage: carsaleAdmin,
    firstheading: "Overview",
    overviewdescritpion: "The Carsale Admin Panel enables seamless management of showrooms, vehicles, and users. Admins can create, update, and delete showrooms, manage vehicle listings, and handle users. Secure authentication ensures controlled access.",
    // secondheading: "Features",
    // featuresdescription: "Good, healthy and fit",
    thirdheading: "Technologies",
    techdescriptions: "Next.js, React.js, shadcn/ui, TailwindCSS, Axios, React Queries, React Hook Forms, JWT, Cloudinary, CI/CD, GitHub Actions, Nginx and Ubuntu."
  },
   {
    id: 4,
    modalImage: carsaleBackend,
    firstheading: "Overview",
    overviewdescritpion: "The Carsale API Backend powers the platform, handling authentication, data operations, and business logic via secure REST APIs. It supports OTP-based user authentication, JWT for admins, and CRUD operations for showrooms, vehicles, wishlists, and reviews. Built with Nest.js, Prisma, and PostgreSQL, it ensures scalability and security.",
    // secondheading: "Features",
    // featuresdescription: "Good, healthy and fit",
    thirdheading: "Technologies",
    techdescriptions: " Nest.js, Node.js, PostgreSQL, Prisma, Swagger, JWT, Cloudinary, Git, Github Actions, CI/CD, Nginx, Ubuntu."
  },
  {
    id: 5,
    modalImage: model6,
    firstheading: "Overview",
    overviewdescritpion: "The website presale.blockrithms.com is a Web3-based ICO (Initial Coin Offering) platform designed for token presales. It allows users to participate in early-stage fundraising by connecting their crypto wallets and purchasing tokens before public listing. The platform focuses on decentralization, transparency, and accessibility, offering a streamlined interface for investors to securely contribute using blockchain technology. Its purpose is to support project launches by providing early supporters with token allocations, while leveraging smart contracts to ensure trust, automation, and secure transactions throughout the presale process.",
    // secondheading: "Features",
    // featuresdescription: "Good, healthy and fit",
    thirdheading: "Technologies",
    techdescriptions: "React.js, tailwindcss, wagmi, web3, solidity and smart contract.",
  },
  {
    id: 6,
    modalImage: scoprichie,
    firstheading: "Overview",
    overviewdescritpion: "The website Scoprichie (by Tarricone Investigazioni) showcases a professional private investigation service specializing in online identity verification. Active since 1978, the agency blends decades of investigative experience with modern digital intelligence tools like OSINT and SOCMINT. It targets cases such as romance scams, grooming risks, suspected infidelity, double lives, or reputation concerns. The process is simple: secure online payment, a confidential questionnaire, digital contract signing, and delivery of a detailed encrypted report within 24–48 hours. With over 5,000 cases resolved, 98% client satisfaction, and 24/7 support, the service emphasizes discretion, reliability, and confidentiality, currently offered at a promotional rate of €380 (VAT included).",
    // secondheading: "Features",
    // featuresdescription: "Good, healthy and fit",
    thirdheading: "Technologies",
    techdescriptions: "Next.js FullStack, postgresql, prisma, api development, JWT authentication, axios, tailwindcss and internationalization.",
  }
];
