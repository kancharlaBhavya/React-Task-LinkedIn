 export const ADD_EDUCATION = "ADD_EDUCATION";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const ADD_SKILL = "ADD_SKILL";
export const DELETE_EDUCATION = "DELETE_EDUCATION";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";
export const DELETE_SKILL = "DELETE_SKILL";

export const addEducation = (data) => {
  return {
    type: ADD_EDUCATION,
    payload: data,
  };
};

export const addExperience = (data) => {
  return {
    type: ADD_EXPERIENCE,
    payload: data,
  };
};

export const addSkill = (data) => {
  return {
    type: ADD_SKILL,
    payload: data,
  };
};

export const deleteEducation = (index) => {
  return {
    type: DELETE_EDUCATION,
    payload: index,
  };
};

export const deleteExperience = (index) => {
  return {
    type: DELETE_EXPERIENCE,
    payload: index,
  };
};

export const deleteSkill = (index) => {
  return {
    type: DELETE_SKILL,
    payload: index,
  };
};
