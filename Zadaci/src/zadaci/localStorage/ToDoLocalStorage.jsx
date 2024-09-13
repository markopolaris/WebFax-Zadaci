import React, { useState, useEffect } from 'react';

function TodoLocalStorage() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className='text-center mt-10'>
      <p className='text-lg'>Opis: Napravite jednostavnu to-do listu gde korisnik može da dodaje i uklanja zadatke. Lista zadataka treba da se čuva u localStorage, tako da kada korisnik osveži stranicu, zadaci ostanu sačuvani.
      </p>

      <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <h2><b>To-Do Lista</b></h2>
        <input className='border-2 border-gray-300 p-2' type="text" value={task} onChange={(e)=> setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button className='text-white bg-black px-6 py-2 mr-2' onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              {t} <button className='text-white bg-black px-6 py-2 mr-2' onClick={()=> removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoLocalStorage;
