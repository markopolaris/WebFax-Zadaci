import React, { useState } from 'react';

function AddItemForm({ addItem }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Hrana');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && !isNaN(amount)) {
      addItem({ name, amount: parseFloat(amount), category });
      setName('');
      setAmount('');
      setCategory('Hrana');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='border-2 border-gray-300 p-2'
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Proizvod..."
      />
      <input
        className='border-2 border-gray-300 p-2'
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Cena..."
      />
      <select
        className='border-2 border-gray-300 p-2'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Hrana">Hrana</option>
        <option value="Slatkisi">Slatkisi</option>
        <option value="Kucni proizvodi">Kucni proizvodi</option>
      </select>
      <button className='text-white bg-black px-6 py-2' ml-2 type="submit">Dodaj proizvod</button>
    </form>
  );
}

export default AddItemForm;
