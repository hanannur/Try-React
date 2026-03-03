import React from "react";
import Cards from "./components/cards";
import Tasks from "./components/Tasks";
import InputArea from "./components/InputArea";
import { useState , useEffect } from "react";


function App() {
   const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("my_tasks");
    return savedTasks ? JSON.parse(savedTasks) : [
        { id: 1, text: "Welcome to your to do list!", completed: false },
        { id: 2, text: "Click the checkbox to mark as complete", completed: false },
    ];
  });

  // 3. Save to localStorage whenever the 'tasks' array changes
  useEffect(() => {
    localStorage.setItem("my_tasks", JSON.stringify(tasks));
  }, [tasks]); 

  const addTask = (text) => {
    if (text.trim() === "") return; 
    const newTask = {
      id: Date.now(), 
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

   const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const activeTasks = tasks.filter(t => !t.completed).length;
  const completedTasks = tasks.filter(t => t.completed).length;
  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4 flex flex-col items-center">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 text-blue-600 mb-2">
            <h1 className="text-4xl  font-bold text-gray-800">
              To-Do list
            </h1>
          </div >
          <p className="text-gray-500 font-medium">
            Stay organized and productive
          </p>
        </div>
        <InputArea onAdd={addTask}  /> 
        <div className="grid grid-cols-3 gap-3 mb-8">
          <Cards  label="Active" count={activeTasks} color="text-blue-600" />
          <Cards label="completed" count={completedTasks} color="text-green-600" />
          <Cards label="Total" count={tasks.length} color="text-gray-600" />
        </div>
        <div className="flex flex-col gap-3">
         {
          tasks.map((task)=>(
            <Tasks
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
            />

          ))
         }
        </div>
      </div>
    </div>
  );
}

export default App;
