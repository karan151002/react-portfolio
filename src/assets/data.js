import jwt from './jwt.png';
import podia from './podia.png';
import CivilSite from './civil-site.jpg'
import Ecom from './ecom.png'
import pnr from './pnr.jpg'
import stutea from './Student-teacher.jpg'
import txtSpe from './text.jpg'
import Wallet from './wallet.jpg'
import weather from './weather.png'

import linkPodia from './link-podia.png';



export const projects = [{
        id: 1,
        title: "Civil Construction Company Website",
        link: "https://github.com/karan151002/civil_construction_website",
        description: "A modern, responsive website for a civil construction company, showcasing services, projects, and expertise through sleek design and interactive features. Built with HTML, CSS, and JavaScript for a seamless user experience.",
        image: CivilSite,
        github: true,
        builtBy: 'Html , CSS , Bootstrap , Js',
        previewImage: null
    },
    {
        id: 2,
        title: "Podia Landing Page",
        link: "https://github.com/karan151002/podia-landing-page-main",
        description: "The Podia Landing Page is a fully responsive website designed to showcase a product or service using HTML, CSS, and Bootstrap. This landing page is built to adapt seamlessly across different devices and screen sizes, providing an optimal viewing experience. It features a clean and modern design with a focus on user engagement and visual appeal. The layout includes key sections such as a hero area, features, testimonials, and a call-to-action. By leveraging Bootstrap's grid system and responsive utilities, the page ensures consistency and functionality across various platforms. This project highlights my ability to create visually appealing and responsive web designs using front-end technologies.",
        image: podia,
        github: false,
        builtBy: 'HTML, CSS, JavaScript, BootStrap',
        previewImage: linkPodia
    },
    {
        id: 3,
        title: "JWT Authentication and Authorization",
        link: "",
        description: "The JWT Authentication and Authorization project demonstrates my ability to implement a secure user authentication system using Node.js and Express.js. In this project, users can register and log in, and upon successful authentication, a JSON Web Token (JWT) is generated and issued to the client. This token is then used to access protected routes and ensure only authenticated users can proceed. The project features robust token-based authentication, where the JWT is verified with each request, as well as role-based authorization that controls access to specific routes depending on user permissions. I implemented middleware to manage token validation and protected route access, along with bcrypt.js to securely hash passwords. MongoDB is used for secure storage of user data, making this project a comprehensive demonstration of modern security practices in web development.",
        image: jwt,
        github: true,
        builtBy: 'Node JS, Express JS, Mongo DB',
        previewImage: null
    },
    {
        id: 4,
        title: "E Commerce with Admin",
        link: "",
        description: "Cafe 9¾ is a full- stack MERN(MongoDB, Express, React, Node.js) web application I developed to showcase a curated selection of items available at a café.The application features a user - friendly interface built with React on the frontend, displaying various food and drink options.On the backend, Express and Node.js manage server - side operations, while MongoDB is used for data storage.This project demonstrates my proficiency in building a full - stack application, combining both frontend and backend technologies to deliver a seamless experience for browsing café items.",
        image: Ecom,
        github: true,
        builtBy: 'React JS, Node JS, Express JS, MongoDB',
        previewImage: null
    },
    {
        id: 5,
        title: "RealTime PNR Checker",
        link: "",
        description: "A real-time PNR checker web application that allows users to instantly check their train ticket status using React. Integrated with live data APIs, it provides updates on booking status, coach details, and journey information in an intuitive and user-friendly interface.",
        image: pnr,
        github: true,
        builtBy: 'React JS',
        previewImage: null
    },
    {
        id: 6,
        title: "Student Teacher Management System",
        link: "https://github.com/karan151002/Student-and-Teacher-Dashboard",
        description: "A dynamic **Student-Teacher Management System** built with **React** and **Chart.js**, designed to streamline academic and administrative processes. This application enables efficient management of student and teacher records, attendance, and performance tracking. With interactive charts powered by Chart.js, users can visualize data such as grades, attendance trends, and teacher performance for actionable insights. The system offers a responsive, user-friendly interface tailored for schools and educational institutions.",
        image: stutea,
        github: true,
        builtBy: 'React JS,Chart Js',
        previewImage: null
    },
    {
        id: 7,
        title: "Text To Speech",
        link: "",
        description: "A **Text-to-Speech (TTS) Application** built with **React.js** that converts written text into natural-sounding speech. This app provides a seamless interface where users can input text, select language and voice options, and listen to the audio output instantly. Ideal for accessibility and productivity, it leverages modern web technologies to deliver a responsive and interactive user experience.",
        image: txtSpe,
        github: true,
        builtBy: 'React JS ',
        previewImage: null
    },
    {
        id: 8,
        title: "Money wallet",
        link: "",
        description: "A **Money Wallet Application** built using the **MERN stack (MongoDB, Express.js, React.js, and Node.js)** to manage personal finances effectively. This secure and user-friendly platform enables users to track income, expenses, and savings with real-time updates. Key features include transaction management, budget planning, analytics with interactive charts, and secure authentication. Perfect for simplifying financial management with a modern and responsive interface.",
        image: Wallet,
        builtBy: 'React JS, Node JS, Express JS, MongoDB',
        previewImage: null
    },
    {
        id: 9,
        title: "Wather Checker",
        link: "",
        description: "A **Weather Checker Application** built with **React.js** that provides real-time weather updates for any location. Users can search for a city to view current temperature, weather conditions, humidity, wind speed, and a 7-day forecast. The app integrates with a weather API for accurate data and features a responsive, clean design for an intuitive user experience. Perfect for staying informed about the weather anytime, anywhere.",
        image: weather,
        builtBy: 'React JS, Node JS, Express JS, MongoDB',
        previewImage: null
    }
]