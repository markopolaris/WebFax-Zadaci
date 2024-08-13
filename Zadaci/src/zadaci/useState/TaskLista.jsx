import React, { useState } from 'react';

function TaskLista() {
const [tasks, setTasks] = useState([]);
const [inputValue, setInputValue] = useState('');

const addTask = () => {
setTasks([...tasks, inputValue]);
setInputValue(''); // Resetuje input nakon dodavanja zadatka
};

return (
<div className='text-center mt-10'>
  <p className='text-lg'>Opis: Napravi komponentu koja omogućava korisniku da doda stavke u spisak zadataka. Svaki put kada korisnik unese zadatak u input polje i klikne na dugme "Add", zadatak treba da se doda na spisak ispod.
    <br />
    1. Kreiraj komponentu TaskList.
    <br />
    2. U komponenti koristi useState za praćenje liste zadataka i trenutnog unosa.
    <br />
    3. Prikaži spisak zadataka i input polje za dodavanje novih zadataka.
  </p>

  <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
    <input className='border-2 border-gray-300 p-2' type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}
    placeholder="Enter a task"
    />
    <button className='text-white bg-black px-6 py-2' onClick={addTask}>Add Task</button>
    <ul>
      {tasks.map((task, index) => (
      <li key={index}>{task}</li>
      ))}
    </ul>
  </div>
</div>
);
}

export default TaskLista;