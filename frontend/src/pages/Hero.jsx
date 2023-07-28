import { useEffect, useState } from "react";
import TaskBar from "../components/TaskBar";
import { Stack, TextField, Button } from "@mui/material";
import illustration from "../assets/illus.png";
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "../services/index";

const Hero = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setInputValue(text);
    setToDoId(_id);
  };
  const handleClick = () => {
    if (isUpdating) {
      updateToDo(toDoId, inputValue, setTasks, setInputValue, setIsUpdating);
    } else {
      if (inputValue.trim() !== "") {
        addToDo(inputValue, setInputValue, setTasks);
      }
    }
  };
  useEffect(() => {
    // Fetch initial tasks when the component mounts
    getAllToDo(setTasks);
  }, []);

  // Handle Enter key press to add the task
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  const handleTaskRemoval = (task_id, setTasks) => {
    // Filter out the task with the specified index from the tasks list
    deleteToDo(task_id, setTasks);
  };
  return (
    <div
      style={{ backgroundColor: `#ECE9F3` }}
      className=" h-screen flex flex-col items-center justify-center w-auto"
    >
      <h1
        style={{ backgroundColor: `#ECE9F3` }}
        className=" w-full h-auto font-mono text-5xl md:text-8xl text-center  text-purple-300 pt-10"
      >
        To do or not to do
      </h1>
      <main
        style={{ backgroundColor: `#ECE9F3` }}
        className="h-screen w-auto flex md:felx-row  md:items-center md:justify-around justify-center items-center"
      >
        <img src={illustration} width={500} height={500} alt="" />
        <div className="pl-10 pt-5 pr-32 overflow-hidden h-80 overflow-y-auto ">
          <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
              <TextField
                // id="filled-basic"
                label="what to-do next!!"
                variant="outlined"
                color="secondary"
                size="large"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button onClick={handleClick} variant="outlined">
                {" "}
                +{" "}
              </Button>
            </Stack>

            {tasks.map((task, index) => (
              <TaskBar
                key={task._id}
                _id={task._id}
                task={task.text}
                updateList={setTasks}
                onTaskRemoval={handleTaskRemoval}
                updateMode={() => updateMode(task._id, task.text)}
              />
            ))}
          </Stack>
        </div>
      </main>
    </div>
  );
};
export default Hero;
