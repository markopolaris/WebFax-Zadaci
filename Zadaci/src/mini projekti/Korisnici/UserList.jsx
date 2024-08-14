import React, { useState, useEffect } from 'react';
import UserItem from './UserItem';
import AddUserForm from './AddUserForm';

function UserList() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchUsers = async () => {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/users');
if (!response.ok) {
throw new Error('Korisnici se nisu ucitali!');
}
const data = await response.json();
setUsers(data);
} catch (error) {
setError(error.message);
} finally {
setLoading(false);
}
};

fetchUsers();
}, []);

const addUser = (newUser) => {
setUsers((prevUsers) => [
...prevUsers,
{ id: prevUsers.length + 1, ...newUser }
]);
};

const deleteUser = (userId) => {
setUsers((prevUsers) => prevUsers.filter(user => user.id !== userId));
};

if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;

return (
<div className='text-center mt-10'>
    <p className='text-lg'>
        <br />
        1.UserList - Komponenta koja prikazuje listu korisnika i omogućava dodavanje i brisanje.
        <br />
        2.UserItem - Komponenta koja prikazuje pojedinačne korisnike.
        <br />
        3.AddUserForm - Komponenta za dodavanje novih korisnika.
    </p>

    <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <h1 className='mb-4'>Lista Korisnika</h1>
        <AddUserForm onAddUser={addUser} />
        <div className='flex flex-wrap'>
            {users.map((user) => (
            <UserItem key={user.id} user={user} onDelete={deleteUser} />
            ))}
        </div>
    </div>
</div>
);
}

export default UserList;