import React, { useState } from 'react';

function AddUserForm({ onAddUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onAddUser({ name, email, note });
      setName('');
      setEmail('');
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
      <input
      className='border-2 border-gray-300 p-2'
        type="text"
        placeholder="Ime i prezime"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '8px' }}
      />
      <input
      className='border-2 border-gray-300 p-2'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginRight: '8px' }}
      />
      <input
      className='border-2 border-gray-300 p-2'
        type="text"
        placeholder="Napomena"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{ marginRight: '8px' }}
      />
      <button className='text-white bg-black px-6 py-2 mb-4' type="submit">Dodaj Korisnika</button>
    </form>
  );
}

export default AddUserForm;
