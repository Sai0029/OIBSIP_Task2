import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  rs,
  git,
  figma,
  docker,
  oasis,
  Octobuzz,
  codsoft,
  carrent,
  dd4,
  portf,
  threejs,
  Indianservers,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];
const experiences = [
  {
    title: "ML Developer",
    company_name: "Indianservers",
    icon: Indianservers,
    iconBg: "#383E56",
    date: "May 2022 - August 2022",
    points: [
      "Developing and maintaining ML applications using Python, Machine Learning Algorithms and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Power BI Developer",
    company_name: "Octobuzz",
    icon: Octobuzz,
    iconBg: "#E6DEDD",
    date: "May 2023 - july 2023",
    points: [
      "Developing and maintaining Data using Power BI and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in data reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Codsoft",
    icon: codsoft,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Oasis Infobyte",
    icon: oasis,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "Please go through my works and leave a feed back through contact",
  },
];
const projects = [
  {
    name: "DriverDrowsinessDetection",
    description:
      "Machine-Learning based application that provides car safety technology which helps prevent accidents caused by the driver getting drowsy.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MachineLearning",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
    ],
    image: dd4,
    source_code_link: "https://github.com/Sai0029/DriverDrowsinessDetection",
  },
  {
    name: "Basic-Portfolio",
    description:
      "A web design portfolio is arguably the single most important key to success as a web designer or front-end developer..Check it out!!",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: portf,
    source_code_link: "https://github.com/Sai0029/Portfolio",
  },
  {
    name: "RestaurantManagement",
    description:
      "Restaurant Management System developed using python, Restaurant management refers to managing day-to-day operations within a restaurant or similar setting.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "Turtle",
        color: "pink-text-gradient",
      },
    ],
    image: rs,
    source_code_link: "https://github.com/Sai0029/RestaurantManagementSystem",
  },
];
export { services, technologies, experiences, testimonials, projects };