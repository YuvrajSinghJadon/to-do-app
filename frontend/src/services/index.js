import axios from "axios";
const baseUrl = "http://localhost:8136";

const getAllToDo = (setTasks) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data ---> ", data);
    setTasks(data);
  });
};

const addToDo = (text, setInputValue, setTasks) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setInputValue("");
      getAllToDo(setTasks);
    })
    .catch((err) => console.log(err));
};
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      console.log("updateCalled");
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
