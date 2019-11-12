const initState = [
  {
    id: 1,
    title: "PixE",
    description: "picture stuff",
    concepts: "team stuff",
    tech: "native stuff",
    github: "https://github.com/team-photo-app/pixe-front-end",
    link: "",
    splash: "/assets/projects/pixE/pixe_sample.jpg"
  },
  {
    id: 2,
    title: "StarChaser",
    description: "something about dark parks",
    concepts: "how to do shing!",
    tech: "some tech stuff",
    github: "https://github.com/HiEricHere/starchaser",
    link: "https://starchaserdarkparks.herokuapp.com/",
    splash: "/assets/projects/starchaser/starchaser_landing_cropped.png"
  },
  {
    id: 3,
    title: "LazyChef",
    description: "something something something lazy chef!",
    concepts: "how to do a thing",
    tech: "basic stuff",
    github: "https://github.com/greatfellows/Project-Fridge-Cleaner",
    link: "https://greatfellows.github.io/Project-Fridge-Cleaner/",
    splash: "/assets/projects/lazychef/lazychef_landing_cropped.png"
  },
  {
    id: 4,
    title: "Heeded",
    description: "failed with lessons",
    concepts: "hard lesson stuff",
    tech: "pi stuff",
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
