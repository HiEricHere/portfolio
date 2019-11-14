const initState = [
  {
    id: 1,
    title: "PixE",
    description:
      "PixE is a photo sharing mobile app. Users can create their own events and join events created by other users. When an event is created a QR code is generated which can then be shared with others. Scanning this QR code invite allows access to the event as well as its pictures. Pictures taken through the app are organized by event, providing a central location for the host and guests to view and retrieve photos later on, making the process of tracking down pictures a trivial one.",
    concepts: [
      {
        concept: "Pivoting",
        description:
          "Our original plan was to build this out with a Python back end, which would be a new language for our back end team members. This would change into using AWS and then Firebase - all within 1 day on a 4 day sprint."
      },
      {
        concept: "Learning New Tech",
        description:
          "One of the requirements for this project was to incorporate a new tech we hadn't used before, such as a new framework or language. Our team was a bit ambitious - with four days to finish we planned to learn and use two new things: React-Native for the front end and (originally) Python for the back. To prepare, I researched React-Native and did a spike test writing out a mini app to see how much it differed from React and how, if at all, it differed in its interaction with Redux. Later into the project I had to do some on the spot research on using Firebase in order to make use of their content storage."
      }
    ],
    tech: "React-Native, Google Firebase, Javascript, Mobile Development",
    github: "https://github.com/team-photo-app/pixe-front-end",
    link: "",
    splash: "/assets/projects/pixE/pixe_sample.jpg"
  },
  {
    id: 2,
    title: "StarChaser",
    description:
      'Dark parks are areas (usually parks) with no light pollution - perfect for camping and viewing the night sky without city lights drowning out all the stars. StarChaser utilizes third party APIs to calculate the closest dark sky park to a location the user inputs, and also calculates night sky viewing conditions. The Google maps API is used to calculate distance based on a database of dark sky parks, and the Dark Sky API is used to calculate weather conditions as well as the current moon phase. Based on weather and moon phase conditions, StarChaser would generate a different response. A clear, cloudless night with no moon would be best for viewing stars (moon light from a full moon would be too strong) and would generate a message like "Go for it!", while a cloudy night with a full moon might generate a message like "Maybe stay in and watch Netflix?"',
    concepts: [
      {
        concept: "Back End Web Development",
        description:
          "This was our first group project focused on back end programming. This meant setting up a server using Node/Express, setting up routes, a PostgreSQL database, using data from third party APIs, and using asynchronous programming concepts."
      },
      {
        concept: "Templating & Server Side Rendering",
        description:
          "We rendered our site using Embedded Javascript templates (EJS), or as we liked to call it, using strawberries (<%= In EJS you wrap code in strawberries =%>). I liked using EJS as it made sense to me - having reusable modular templates that could be inserted in any page felt like a natural progression moving away from vanilla HTML/CSS/JS. Of course, later I would learn React."
      }
    ],
    tech:
      "Express.js, Node.js, Embedded Javascript (EJS), Javascript, jQuery, PostgreSQL, HTML, CSS",
    github: "https://github.com/HiEricHere/starchaser",
    link: "https://starchaserdarkparks.herokuapp.com/",
    splash: "/assets/projects/starchaser/starchaser_landing_cropped.png"
  },
  {
    id: 3,
    title: "LazyChef",
    description:
      '"What can I make with what’s in the fridge?" My first group project at Code Fellows. A fun project that helps users decide what to make for dinner with the random left over ingredients they have in their fridge. Lets users choose from a list of ingredients and then lists recipes that contain the selected ingredients, with recipes that have more selected ingredients sorted at the top. Users could also sign up/log in (not using real authentication) and favorite recipes that would persist... until they cleared their local storage. Hey, we only had local storage to work with for user persistence!',
    concepts: [
      {
        concept: "Web Dev Basics",
        description:
          "Our team built this site out using basic HTML, CSS, and Javascript. This project helped introduce us to learning to work in a team, handling version control, and communication and team work. On the technical side of things we used DOM manipulation, getting/setting from local storage, and using JSON objects."
      }
    ],
    tech: "HTML/CSS/Javascript",
    github: "https://github.com/greatfellows/Project-Fridge-Cleaner",
    link: "https://greatfellows.github.io/Project-Fridge-Cleaner/",
    splash: "/assets/projects/lazychef/lazychef_landing_cropped.png"
  },
  {
    id: 4,
    title: "Heeded",
    description:
      "An app for public speaking that would help gauge the level of engagement of the audience. The idea was to use a Raspberry Pi with a web cam to take pictures at timed intervals of an audience, upload the pictures to AWS where they would get picked up by Amazon's Facial Rekognition API which would then provide data that we would parse through to determine the average engagement level and then display on a graph on the front end in real time. It was a little ambitious and our group got close but was not able to get a working product at the end of the four day sprint.",
    concepts: [
      {
        concept: "Failing (but not really)",
        description:
          "On the morning we were to present our project something broke. Just the day before we had left with a working product that, while not pretty, worked as we intended and displayed a graph in real time that showed engagement levels. So imagine our collective horror and ensuing panic and finger pointing when something broke with only an hour or two before our presentation - except not really. The team buckled down and started diagnosing the issue and working on possible solutions. In the end we were not able to fix the issue, but I think it was nevertheless a good experience to note down - how a good team would react to a crisis situation. While the outcome was disappointing, it was not due to the team falling apart or lack of technical skill, but because we tried to do something ambitious, which shouldn't be viewed as a failure. And so I'm going to include this in my portfolio as it was an experience in my journey into software development."
      },
      {
        concept: "Learning New Tech",
        description:
          "We utilized some unfamiliar tech for this project: Raspberry Pi and AWS for content storage. The Raspberry Pi is fun stuff and my first brief exposure to working with Linux. AWS was a lot more involved to work with and our group spent the better half of the first morning getting access and permissions to play nice for all of us."
      }
    ],
    tech: "Node.js, Express.js, Javascript, MongoDB, RaspberryPi, AWS",
    github: "https://github.com/HiEricHere/Heeded-Final-App",
    link: "",
    splash: ""
  }
];

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.payload];
    case "EDIT_PROJECT":
      return state.map(project => {
        return project.id === action.payload.id ? action.payload : project;
      });
    default:
      return state;
  }
};

export default projectReducer;
