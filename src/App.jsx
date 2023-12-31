import { useState, useEffect } from "react";
import CreateTasks from "./components/CreateTasks";
import ListTasks from "./components/ListTasks";
import Modal from "./components/Modal";
import { Toaster } from "react-hot-toast";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  //console.log("tasks:", tasks);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
        <div className="bg-slate-100 w-screen h-screen flex flex-col p-3 items-center pt-32 gap-16">
          <CreateTasks tasks={tasks} setTasks={setTasks} />
          <ListTasks tasks={tasks} setTasks={setTasks} showModal={showModal} setShowModal={setShowModal} />
          <Modal tasks={tasks} setTasks={setTasks} showModal={showModal} setShowModal={setShowModal} />
        </div>
    </DndProvider>
  );
}

export default App;
