import React from "react";
import Project from "../Project/Project";

import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "PixE",
      description:
        "PixE is a photo sharing mobile app. Users can create their own events and join events created by other users. When an event is created a QR code is generated which can then be shared with others. Scanning this QR code invite allows access to the event as well as its pictures. Pictures taken through the app are organized by event, providing a central location for the host and guests to view and retrieve photos later on, making the process of tracking down pictures easy for everyone.",
      tools: "React-Native, Google Firebase, JavaScript",
      github: "https://github.com/team-photo-app/pixe-front-end",
      link: "",
      splash: "/assets/projects/pixE/pixe_splash.png",
      sampleImage: "/assets/projects/pixE/pixe_sample.jpg"
    },
    {
      id: 2,
      title: "StarChaser",
      description:
        "Dark parks are areas (usually parks) with no light pollution - perfect for camping and viewing the night sky without city lights drowning out all the stars. StarChaser utilizes third party APIs to calculate the closest dark sky park to a location the user inputs, and also calculates night sky viewing conditions. A back end project utilizing server side rendering.",
      tools:
        "Express.js, Node.js, Embedded JavaScript (EJS), JavaScript, jQuery, PostgreSQL, HTML, CSS",
      github: "https://github.com/HiEricHere/starchaser",
      link: "https://starchaserdarkparks.herokuapp.com/",
      splash: "/assets/projects/starchaser/starchaser_splash.png",
      sampleImage:
        "/assets/projects/starchaser/starchaser_condition_mobile_cropped.png"
    },
    {
      id: 3,
      title: "LazyChef",
      description:
        '"What can I make with what’s in the fridge?" My first group project at Code Fellows. A fun project that helps users decide what to make for dinner with the random left over ingredients they have in their fridge. Lets users choose from a list of ingredients and then lists recipes that contain the selected ingredients, with recipes that have more selected ingredients sorted at the top. Users could also sign up/log in (not using real authentication) and favorite recipes that would persist... until they cleared their local storage. Hey, we only had local storage to work with for user persistence!',
      tools: "HTML/CSS/JavaScript",
      github: "https://github.com/greatfellows/Project-Fridge-Cleaner",
      link: "https://greatfellows.github.io/Project-Fridge-Cleaner/",
      splash: "/assets/projects/lazychef/lazychef_splash.png",
      sampleImage: "/assets/projects/lazychef/lazychef_landing_cropped.png"
    },
    {
      id: 4,
      title: "Heeded",
      description:
        "An app for public speaking that would help gauge the level of engagement of the audience. The idea was to use a Raspberry Pi with a web cam to take pictures at timed intervals of an audience, upload the pictures to AWS where they would get picked up by Amazon's Facial Rekognition API which would then provide data that we would parse through to determine the average engagement level and then display on a graph on the front end in real time. It was a little ambitious and our group got close but was not able to get a working product at the end of the four day sprint.",
      tools: "Node.js, Express.js, JavaScript, MongoDB, RaspberryPi, AWS",
      github: "https://github.com/HiEricHere/Heeded-Final-App",
      link: "",
      splash: "",
      sampleImage: ""
    }
  ];

  return (
    <section id="container-portfolio">
      <ul>
        {projects.map(project => {
          return <Project key={project.id} details={project} />;
        })}
      </ul>
    </section>
  );
};

export default Portfolio;
