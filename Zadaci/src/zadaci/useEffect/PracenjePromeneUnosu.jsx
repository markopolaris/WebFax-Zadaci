import React, { useState, useEffect } from 'react';

function PracenjePromeneUUnusu() {
const [input, setInput] = useState('');
const [message, setMessage] = useState('');

useEffect(() => {
if (input.length > 5) {
setMessage('Input ima vise od 5 karaktera');
} else {
setMessage('');
}
}, [input]); // Ovaj efekat se pokreće svaki put kada se 'input' promeni

return (
<div className='text-center mt-10'>
    <p className='text-lg'>Napravite komponentu koja prati promene u unosu (input) i prikazuje poruku kada korisnik unese više od 5 karaktera. Poruka treba da se pojavi odmah kada korisnik unese više od 5 karaktera, i da nestane kada unos bude 5 ili manje karaktera.
        <br />
        1.Kreirajte komponentu InputWatcher.
        <br />
        2.Koristite useState za praćenje unosa i poruke.
        <br />
        3.Koristite useEffect za praćenje promena u unosu i ažuriranje poruke.
    </p>
    <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <input className='border-2 border-gray-300 p-2' type="text" value={input} onChange={(e)=> setInput(e.target.value)}
        placeholder="Type something..."
        />
        <p className='text-red-400'>{message}</p>
    </div>
</div>
);
}

export default PracenjePromeneUUnusu;