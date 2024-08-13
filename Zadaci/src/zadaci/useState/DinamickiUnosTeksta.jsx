import React, { useState } from 'react';

function DinamickiUnosTeksta() {
const [text, setText] = useState('');

return (
<div className='text-center mt-10'>
  <p className='text-lg'>Opis: Napravi komponentu koja omogućava korisniku da unese tekst u input polje i prikaže taj tekst ispod polja u realnom vremenu.
    1. Kreiraj komponentu TextInput.
    <br />
    2. U komponenti koristi useState za praćenje unosa teksta.
    <br />
    3. Prikaži uneseni tekst ispod input polja.
  </p>

    <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <input className='border-2 border-gray-300 p-2' type="text" value={text} onChange={(e)=> setText(e.target.value)}
        placeholder="Napisi nesto..."
        />
        <p>Ovo upravo pises: {text}</p>
    </div>
</div>
);
}

//useState('') inicijalizuje stanje sa praznim stringom.
//setText(e.target.value) ažurira stanje svaki put kada korisnik unese tekst, prikazujući ga odmah ispod input polja.

export default DinamickiUnosTeksta;