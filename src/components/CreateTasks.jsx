import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const CreateTasks = ({ tasks, setTasks }) => {

    const [task, setTask] = useState({
        id: "",
        name: "",
        status: "todo", // todo, in progress or closed
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.name.length < 3) 
            return toast.error("A task must have more than 3 characters")

        setTasks((prev)=> {
            const list = [...prev, task];

            localStorage.setItem("tasks", JSON.stringify(list));

            return list;
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-10 w-64 px-1" 
            value={task.name}
            onChange={(e) => 
                setTask({ ...task, id: uuidv4(), name: e.target.value })
            }
            />
            <button className="bg-cyan-500 rounded-md h-10 px-4 text-white">
                Create
            </button>
        </form>
    );
};

export default CreateTasks;