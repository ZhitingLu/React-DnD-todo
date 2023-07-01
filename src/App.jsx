import { useState } from 'react';
import CreateTasks from './components/CreateTasks';
import ListTasks from './components/ListTasks';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className="bg-slate-100 w-screen h-screen flex flex-col items-center justify-center">
        <CreateTasks tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  )
}

export default App
