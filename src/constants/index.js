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
    git,
    figma,
    docker,
    android,
    c,
    cplusplus,
    csharp,
    java,
    linux,
    netframework,
    python,
    spring,
    diver,
    doppel,
    carrent,
    sdrcb,
    jobit,
    tripguide,
    threejs,
    fc,
    rs,
    ja,
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
      title: "Learning enthusiast",
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
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cplusplus,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "NetFramework",
      icon: netframework,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring",
      icon: spring,
    },
    {
      name: "Android",
      icon: android,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Engineering Degree Internship",
      company_name: "Doppel",
      icon: doppel,
      iconBg: "#383E56", //colors interchange
      date: "March 2022 - July 2022",
      points: [
        "Developing Virtual Reality and Augmented Reality applications using Unreal Engine and other related technologies.",
        "Creating a QR Code Generator App for the company using Electron.",
        "Collaborating with cross-functional teams including designers, archeologists, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Collaborator",
      company_name: "Diver",
      icon: diver,
      iconBg: "#E6DEDD", //colors interchange
      date: "February 2019 - December 2021",
      points: [
        "Dealt with the clients everyday, doing customer service selling them products.",
        "Solved day-to-day problems like optimization and website related issues.",
        "Organized product events for the company.",
        "Made product market studies..",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I've known Henrique for years and I am always amazed by his dedication to make everything he does incredible.",
      name: "Filipe Carvalho",
      designation: "HPM",
      company: "WeDoStuff",
      image: fc,
    },
    {
      testimonial:
        "As an experienced developer, I had the opportunity to mentor Henrique and was impressed by their eagerness to improve.",
      name: "Ricardo Santos",
      designation: "SE",
      company: "LetsGetChecked",
      image: rs,
    },
    {
      testimonial:
        "I had the opportunity to study with Henrique. Everyday I was impressed by his good values and his skill to adapt to any challenge.",
      name: "José Almeida",
      designation: "SE",
      company: "GfK",
      image: ja,
    },
  ];
  
  const projects = [
    {
      name: "Ticketing System",
      description:
        "Project made in my Computer Engineering Degree. It's a distributed system with multiple databases in which users can register, login, and manage their tickets.",
      tags: [
        {
          name: "java",
          color: "orange-text-gradient",
        },
        {
          name: "rest",
          color: "green-text-gradient",
        },
      ],
      image: sdrcb,
      source_code_link: "https://github.com/SmithCalimero/SDRCB",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  