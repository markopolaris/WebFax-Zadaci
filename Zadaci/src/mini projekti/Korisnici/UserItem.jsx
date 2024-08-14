import React from 'react';

function UserItem({ user, onDelete }) {
  return (
    <div className='text-base' style={{ border: '1px solid #ddd', padding: '16px', margin: '16px', borderRadius: '8px' }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Napomena: {user.note}</p>
      <button className='text-white bg-black px-6 py-2 mt-4' onClick={() => onDelete(user.id)}>Izbrisi Korisnika</button>
    </div>
  );
}

export default UserItem;
