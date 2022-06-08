import defaultData from "../workingArea/defaultData";

const checkStorage = () => {
  if (JSON.parse(localStorage.getItem("canvas"))) {
    return JSON.parse(localStorage.getItem("canvas"));
  } else {
    return defaultData;
  }
};

export default checkStorage;
