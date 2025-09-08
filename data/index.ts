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
      "“One of the best developers I have ever worked with. Very talented, fast-responsive, and with great performance. If you're looking for a long-term, stable developer for your project, don't hesitate to hire Geeks Vission! We'll definitely work with them again!”",
    name: "Brian Irving",
    company: "",
    date: "May 9, 2023",
    time: "10:35 PM",
  },
  {
    id: 2,
    rating: 4,
    paragraph:
      "“Geeks Vission completed the project 100%. They provided great solutions and were incredibly resourceful. A clever and reliable team!”",
    name: "Dandi Fandes",
    company: "",
    date: "October 15, 2023",
    time: "8:00 AM",
  },
  {
    id: 3,
    rating: 5,
    paragraph:
      "“I had the honor to work with Geeks Vission for developing my web app, and I couldn’t be happier. The team combines technical and business skills, making them ideal for any project. They went above and beyond, offering suggestions and delivering more than promised. Communication was excellent, availability was unmatched, and they maintained complete honesty throughout. Finding a team like Geeks Vission, with such skilled backend developers, is rare. Beyond their expertise, they’re just great human beings. I wholeheartedly recommend them. You won’t be disappointed! I hope my project succeeds so I can work with them again. Thanks for everything!”",
    name: "Marco Tusa",
    company: "CEO Flume",
    date: "Feb 23, 2024",
    time: "1:15 PM",
  },
  // {
  //   id: 4,
  //   rating: 4,
  //   paragraph:
  //     "“Geeks Vission delivered exceptional Solidity work for our company. The team is sharp and not only followed the architecture for a complex workflow smart contract but also made valuable improvements. The project involved partial ownership requiring approval from a third-party legal entity, and they handled it seamlessly. We will definitely seek their guidance for future smart contract and blockchain projects!”",
  //   name: "William Dovrak",
  //   company: "CEO MVP Eng",
  //   date: "Feb 23, 2024",
  //   time: "1:15 PM",
  // },
  {
    id: 5,
    rating: 5,
    paragraph:
      "“All work was completed successfully. It was a pleasure working with Geeks Vission—a team of true professionals. Looking forward to working together again soon!”",
    name: "Bounty Portals",
    company: "",
    date: "Feb 23, 2024",
    time: "1:15 PM",
  },
  {
    id: 6,
    rating: 4,
    paragraph:
      "“This is my second time working with Geeks Vission, and they always deliver excellent results. Highly recommended!”",
    name: "Fernando Chandra",
    company: "",
    date: "Feb 27, 2024",
    time: "3:15 PM",
  },
  {
    id: 7,
    rating: 5,
    paragraph:
      "“Geeks Vission truly understood my requirements and delivered fast. I highly recommend working with them!”",
    name: "Fernando Chandra",
    company: "",
    date: "Feb 23, 2024",
    time: "1:15 PM",
  },
];

export const projects = [
  {
    id: 1,
    image: project4,
    title: "Web Development",
    projectname: "Streamlining IT Infrastructure",
    icon: arrowRight,
  },
  {
    id: 2,
    image: project5,
    title: "Web Development",
    projectname: "Transforming Customer Experience",
    icon: arrowRight,
  },
  {
    id: 3,
    image: project1,
    title: "Web Development",
    projectname: "Scaling Agile Development",
    icon: arrowRight,
  },
  {
    id: 4,
    image: project2,
    title: "Web Development",
    projectname: "Optimizing IT Operations",
    icon: arrowRight,
  },
  {
    id: 5,
    image: project3,
    title: "Web Development",
    projectname: "Maximizing Efficiency With DevOps",
    icon: arrowRight,
  },
];

export const modal = [
  {
    id: 1,
    modalImage: model6,
    firstheading: "Overview1",
    overviewdescritpion: `“The Ethereum network had been plagued by extreme congestion due to increased usage and low throughput. And, as more and more transactions need to be confirmed, the price of each transaction (or “gas fee”), increases - making them not just slow, but costly.
One of the most promising examples of those are optimistic rollups – smart contracts that execute transactions off-chain and post only the results of computations to their base layers. Thanks to that, calculations are done in a faster and cheaper way.
Arbitrum is a layer 2 (L2) scaling solution and a leading web3 project in the optimistic rollup space. It relies on the robustness of Ethereum for its security, and adds a greatly increased transaction capacity at a much lower cost than its base layer.
This L2 chain was initially constrained by the slower and less energy-efficient Proof-of-Work consensus of Ethereum - but that has changed with The Merge, an upgrade that turned Ethereum into a Proof-of-Stake blockchain.
Arbitrum gives web3 developers tools to build apps and solutions that are not only faster and cheaper in use but also compatible with other Ethereum-based tools.” ------------------2--------------
“The Ethereum network had been plagued by extreme congestion due to increased usage and low throughput. And, as more and more transactions need to be confirmed, the price of each transaction (or “gas fee”), increases - making them not just slow, but costly.
One of the most promising examples of those are optimistic rollups – smart contracts that execute transactions off-chain and post only the results of computations to their base layers. Thanks to that, calculations are done in a faster and cheaper way.
Arbitrum is a layer 2 (L2) scaling solution and a leading web3 project in the optimistic rollup space. It relies on the robustness of Ethereum for its security, and adds a greatly increased transaction capacity at a much lower cost than its base layer.
This L2 chain was initially constrained by the slower and less energy-efficient Proof-of-Work consensus of Ethereum - but that has changed with The Merge, an upgrade that turned Ethereum into a Proof-of-Stake blockchain.
Arbitrum gives web3 developers tools to build apps and solutions that are not only faster and cheaper in use but also compatible with other Ethereum-based tools.” 
`,
    secondheading: "Features",
    featuresdescription: "Good, healthy and fit",
    thirdheading: "Technologies",
    techdescriptions: `“The Ethereum network had been plagued by extreme congestion due to increased usage and low throughput. And, as more and more transactions need to be confirmed, the price of each transaction (or “gas fee”), increases - making them not just slow, but costly.
One of the most promising examples of those are optimistic rollups – smart contracts that execute transactions off-chain and post only the results of computations to their base layers. Thanks to that, calculations are done in a faster and cheaper way.
Arbitrum is a layer 2 (L2) scaling solution and a leading web3 project in the optimistic rollup space. It relies on the robustness of Ethereum for its security, and adds a greatly increased transaction capacity at a much lower cost than its base layer.
This L2 chain was initially constrained by the slower and less energy-efficient Proof-of-Work consensus of Ethereum - but that has changed with The Merge, an upgrade that turned Ethereum into a Proof-of-Stake blockchain.
Arbitrum gives web3 developers tools to build apps and solutions that are not only faster and cheaper in use but also compatible with other Ethereum-based tools.” ------------------2--------------
“The Ethereum network had been plagued by extreme congestion due to increased usage and low throughput. And, as more and more transactions need to be confirmed, the price of each transaction (or “gas fee”), increases - making them not just slow, but costly.
One of the most promising examples of those are optimistic rollups – smart contracts that execute transactions off-chain and post only the results of computations to their base layers. Thanks to that, calculations are done in a faster and cheaper way.
Arbitrum is a layer 2 (L2) scaling solution and a leading web3 project in the optimistic rollup space. It relies on the robustness of Ethereum for its security, and adds a greatly increased transaction capacity at a much lower cost than its base layer.
This L2 chain was initially constrained by the slower and less energy-efficient Proof-of-Work consensus of Ethereum - but that has changed with The Merge, an upgrade that turned Ethereum into a Proof-of-Stake blockchain.
Arbitrum gives web3 developers tools to build apps and solutions that are not only faster and cheaper in use but also compatible with other Ethereum-based tools.” 
`,
  },
  {
    id: 2,
    modalImage: model7,
    firstheading: "Overview2",
    overviewdescritpion: `“The Ethereum network had been plagued by extreme congestion due to increased usage and low throughput. And, as more and more transactions need to be confirmed, the price of each transaction (or “gas fee”), increases - making them not just slow, but costly.
One of the most promising examples of those are optimistic rollups – smart contracts that execute transactions off-chain and post only the results of computations to their base layers. Thanks to that, calculations are done in a faster and cheaper way.
Arbitrum is a layer 2 (L2) scaling solution and a leading web3 project in the optimistic rollup space. It relies on the robustness of Ethereum for its security, and adds a greatly increased transaction capacity at a much lower cost than its base layer.
This L2 chain was initially constrained by the slower and less energy-efficient Proof-of-Work consensus of Ethereum - but that has changed with The Merge, an upgrade that turned Ethereum into a Proof-of-Stake blockchain.
Arbitrum gives web3 developers tools to build apps and solutions that are not only faster and cheaper in use but also compatible with other Ethereum-based tools.”`,
    secondheading: "Features",
    featuresdescription: "Good, healthy and fit",
    thirdheading: "Technologies",
    techdescriptions: "MERN Stack",
  },
  {
    id: 3,
    modalImage: model3,
    firstheading: "Overview3",
    overviewdescritpion: `“The Ethereum network had been plagued by extreme congestion due to increased usage and low throughput. And, as more and more transactions need to be confirmed, the price of each transaction (or “gas fee”), increases - making them not just slow, but costly.
One of the most promising examples of those are optimistic rollups – smart contracts that execute transactions off-chain and post only the results of computations to their base layers. Thanks to that, calculations are done in a faster and cheaper way.
Arbitrum is a layer 2 (L2) scaling solution and a leading web3 project in the optimistic rollup space. It relies on the robustness of Ethereum for its security, and adds a greatly increased transaction capacity at a much lower cost than its base layer.
This L2 chain was initially constrained by the slower and less energy-efficient Proof-of-Work consensus of Ethereum - but that has changed with The Merge, an upgrade that turned Ethereum into a Proof-of-Stake blockchain.
Arbitrum gives web3 developers tools to build apps and solutions that are not only faster and cheaper in use but also compatible with other Ethereum-based tools.”`,
    secondheading: "Features",
    featuresdescription: "Good, healthy and fit",
    thirdheading: "Technologies",
    techdescriptions: "MERN Stack",
  },
  {
    id: 4,
    modalImage: model4,
    firstheading: "Overview4",
    overviewdescritpion: `“The Ethereum network had been plagued by extreme congestion due to increased usage and low throughput. And, as more and more transactions need to be confirmed, the price of each transaction (or “gas fee”), increases - making them not just slow, but costly.
One of the most promising examples of those are optimistic rollups – smart contracts that execute transactions off-chain and post only the results of computations to their base layers. Thanks to that, calculations are done in a faster and cheaper way.
Arbitrum is a layer 2 (L2) scaling solution and a leading web3 project in the optimistic rollup space. It relies on the robustness of Ethereum for its security, and adds a greatly increased transaction capacity at a much lower cost than its base layer.
This L2 chain was initially constrained by the slower and less energy-efficient Proof-of-Work consensus of Ethereum - but that has changed with The Merge, an upgrade that turned Ethereum into a Proof-of-Stake blockchain.
Arbitrum gives web3 developers tools to build apps and solutions that are not only faster and cheaper in use but also compatible with other Ethereum-based tools.”`,
    secondheading: "Features",
    featuresdescription: "Good, healthy and fit",
    thirdheading: "Technologies",
    techdescriptions: "MERN Stack",
  },
  {
    id: 5,
    modalImage: model5,
    firstheading: "Overview5",
    overviewdescritpion: `“The Ethereum network had been plagued by extreme congestion due to increased usage and low throughput. And, as more and more transactions need to be confirmed, the price of each transaction (or “gas fee”), increases - making them not just slow, but costly.
One of the most promising examples of those are optimistic rollups – smart contracts that execute transactions off-chain and post only the results of computations to their base layers. Thanks to that, calculations are done in a faster and cheaper way.
Arbitrum is a layer 2 (L2) scaling solution and a leading web3 project in the optimistic rollup space. It relies on the robustness of Ethereum for its security, and adds a greatly increased transaction capacity at a much lower cost than its base layer.
This L2 chain was initially constrained by the slower and less energy-efficient Proof-of-Work consensus of Ethereum - but that has changed with The Merge, an upgrade that turned Ethereum into a Proof-of-Stake blockchain.
Arbitrum gives web3 developers tools to build apps and solutions that are not only faster and cheaper in use but also compatible with other Ethereum-based tools.”`,
    secondheading: "Features",
    featuresdescription: "Good, healthy and fit",
    thirdheading: "Technologies",
    techdescriptions: "MERN Stack",
  },
];
