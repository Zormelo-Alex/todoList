import React, { useEffect, useState } from "react";
import {
  AddModal,
  AddTask,
  Filter,
  Header,
  Search,
  Task,
  UserName,
} from "./components";

function App() {
  const storedData = localStorage.getItem("todo-data");
  const initialTasks = storedData ? JSON.parse(storedData) : [];

  const [isAddOpen, setisAddOpen] = useState(false);
  const [isUserModelOpen, setisUserModelOpen] = useState(true);
  const [username, setusername] = useState("DOM");
  const [tasks, setTasks] = useState(initialTasks);
  const [displayedTasks, setDisplayedTasks] = useState([]);

  const addTask = (task) => {
    try {
      const date = new Date();
      const id = Math.random();
      const newTask = {
        id,
        task,
        date,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.log(error);
    }
  };

  const searchTask = (name) => {
    try {
      let filter = tasks;
      // console.log(name)
      filter = filter.filter((data) => data.task.includes(name));
      // console.log(filter)
      setDisplayedTasks(filter);
    } catch (error) {
      console.log(error);
    }
  };

  const filterTasks = (option) => {
    try {
      let filter = tasks;
      if (option == "All") {
        setDisplayedTasks(tasks);
      } else if (option == "Completed") {
        filter = filter.filter((data) => data.completed == true);
        setDisplayedTasks(filter);
      } else {
        filter = filter.filter((data) => data.completed == false);
        setDisplayedTasks(filter);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChecked = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id == id) {
        const status = task.completed;
        return {
          ...task,
          completed: !status,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    try {
      let filter = tasks;
      filter = filter.filter((data) => data.id != id);
      setTasks(filter);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUsernameChange = (name) => {
    if (name.trim() == "") return alert("Invalid name");
    localStorage.setItem("todo-user", name);
    setusername(name);
    setisUserModelOpen(false);
  };

  useEffect(() => {
    const user = localStorage.getItem("todo-user");
    if (user) {
      // console.log(user)
      setisUserModelOpen(false);
      setusername(user);
    }
  }, []);

  useEffect(() => {
    // console.log(tasks)
    localStorage.setItem("todo-data", JSON.stringify(tasks));
    setDisplayedTasks(tasks);
  }, [tasks]);

  return (
    <div className="bg-secondary_bgcolor flex justify-center w-full items-center sm:p-8">
      <div className="bg-bg_color min-h-screen p-6 w-full sm:w-[500px] relative sm:rounded sm:shadow-lg">
        {isAddOpen && (
          <AddModal onAddTask={addTask} onClose={() => setisAddOpen(false)} />
        )}
        {isUserModelOpen && <UserName handleAddUser={handleUsernameChange} />}
        <Header name={username} />
        <Search placeholder={"Search your Tasks"} onChange={searchTask} />
        <Filter handleFilter={filterTasks} />
        <div className="mt-16 text-text_secondary">
          <h3>Tasks</h3>
        </div>
        <div className="flex flex-col gap-2 mt-8">
          {displayedTasks.length ? (
            <div>
              {displayedTasks?.map((task, index) => (
                <div key={index} className="my-2">
                  <Task
                    data={task}
                    handleChecked={handleChecked}
                    handleDelete={handleDelete}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center text-text_secondary text-sm mt-8">
              <p>Add a new task...</p>
            </div>
          )}
        </div>
        <AddTask handleAdd={() => setisAddOpen(true)} />
      </div>
    </div>
  );
}

export default App;
