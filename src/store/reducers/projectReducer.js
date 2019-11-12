const initState = [
  {
    id: 1,
    title: "PixE",
    description: "picture stuff",
    concepts: "team stuff",
    tech: "native stuff"
  },
  {
    id: 2,
    title: "StarChaser",
    description: "something about dark parks",
    concepts: "how to do shing!",
    tech: "some tech stuff"
  },
  {
    id: 3,
    title: "LazyChef",
    description: "something something something lazy chef!",
    concepts: "how to do a thing",
    tech: "basic stuff"
  },
  {
    id: 4,
    title: "Heeded",
    description: "failed with lessons",
    concepts: "hard lesson stuff",
    tech: "pi stuff"
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
