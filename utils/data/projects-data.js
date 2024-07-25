import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";
import appleaid from "/public/image/appleaid.png";

export const projectsData = [
  {
    id: 1,
    name: "AI Powered Disease Detection App",
    description:
      "Planned and Developed R&D based cross platform application in react native and used Flask for backend and GCP for deployment. Developed and Implemented a custom CNN architecture in Tensorflow with 99.86% accuracy. The App helps in detecting diseases using leaf images and recommends treatment. App also have social community feature for making and interacting with posts.",
    tools: [
      "Flask",
      "Firebase",
      "Fast API",
      "GCP",
      "React Native",
      "React",
      "Tensorflow",
    ],
    link: "To be deployed",
    code: "",
    demo: "",
    image: appleaid,
  },
  {
    id: 2,
    name: "Job Portal in MERN Stack",
    description:
      "Developed a job prtal web app from scratch where employers can post jobs and job seekers can find the jobs by applying various filters such as job type, work type, duration, experience etc. Also built advance search from scratch to search jobs using company, location and title. Implemented JSON Web Token for user authentication.",
    tools: [
      "React",
      "Express",
      "MySQL",
      "Node",
      "Radix UI",
      "Prisma ORM",
      "JWT Authentication",
      "React Context API",
    ],
    link: "https://mernx-job-portal.vercel.app",
    code: "",
    demo: "",
    image: "",
  },

  {
    id: 3,
    name: "Project Management Web App",
    description:
      "Developed a project management app from where projects can be assigned to team and track the status of the tasks. Implemented sorting, filtering and pagination for the tasks. Developed a nice dashboard with graphs as well. Integrated OAuth for authentication",
    tools: [
      "Next JS",
      "Tailwind",
      "Radix UI",
      "Prisma ORM",
      "OAuth",
      "TypeScript",
      "MYSQL",
    ],
    code: "",
    link: "To be deployed",
    demo: "",
    image: "",
  },
  {
    id: 4,
    name: "Logo Maker App",
    description:
      "This react based app helps in creating and customizing the logo and finally download it in desired dimensions.",
    tools: ["React", "Tailwind CSS", "TypeScript"],
    link: "",
    code: "",
    demo: "",
    image: "",
  },
  {
    id: 5,
    name: "Weather App",
    description:
      "Designed and Developed weather app with live API integration in React. The Web App also shows 7 days forecast.",
    tools: ["React", "Tailwind", "REST API"],
    link: "https://weather.tinysq.com",
    code: "",
    demo: "",
    image: ayla,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
