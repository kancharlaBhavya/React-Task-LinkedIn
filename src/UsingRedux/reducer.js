import {ADD_EDUCATION,ADD_EXPERIENCE,ADD_SKILL,DELETE_EDUCATION,DELETE_EXPERIENCE,DELETE_SKILL,ADD_CONTACT } from "./action";

const initialState = {
  user: {
    about: "",
  },
  educationList: [],
  experienceList: [],
  skillList: [],
  contactList:[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EDUCATION:
      return {
        ...state,
        educationList: [...state.educationList, action.payload],
      };
    
    case ADD_EXPERIENCE:
      return {
        ...state,
        experienceList: [...state.experienceList, action.payload],
      };
    case ADD_SKILL:
      return {
        ...state,
        skillList: [...state.skillList, action.payload],
      };
      case ADD_CONTACT:
        return{
          ...state,
          contactList: [...state.contactList, action.payload.data],
        };
    case DELETE_EDUCATION:
      return {
        ...state,
        educationList: state.educationList.filter((edu, index) => index !== action.payload),
      };
    case DELETE_EXPERIENCE:
      return {
        ...state,
        experienceList: state.experienceList.filter((exp, index) => index !== action.payload),
      };
    case DELETE_SKILL:
      return {
        ...state,
        skillList: state.skillList.filter((skill, index) => index !== action.payload),
      };
   
    default:
      return state;
  }
};

export default rootReducer;
