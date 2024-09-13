import React, { useState, useEffect } from 'react';

function NameSaver() {
const [name, setName] = useState('');

useEffect(() => {
const savedName = localStorage.getItem('name');
if (savedName) {
setName(savedName);
}
}, []);

const handleChange = (e) => {
setName(e.target.value);
};

const saveName = () => {
localStorage.setItem('name', name);
};

return (
<div className='text-center mt-10'>
  <p className='text-lg'>Opis: Napravite jednostavnu komponentu koja omogućava korisniku da unese svoje ime u input polje. Kada korisnik pritisne dugme "Sačuvaj", ime se treba sačuvati u localStorage. Kada se stranica ponovo učita, ime treba automatski da se učita iz localStorage i prikaže u polju.
  </p>

    <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <h2>Upisi ime:</h2>
        <input className='border-2 border-gray-300 p-2' type="text" value={name} onChange={handleChange} />
        <button className='text-white bg-black px-6 py-2 mr-2' onClick={saveName}>Save</button>
        {name && <p>Pozdrav, {name}!</p>}
    </div>
</div>
);
}

export default NameSaver;