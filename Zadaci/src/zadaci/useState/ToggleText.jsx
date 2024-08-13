import React, { useState } from 'react';

function ToggleText() {
const [isVisible, setIsVisible] = useState(false);

return (
<div className='text-center mt-10'>
  <p className='text-lg'>Opis: Napravi komponentu koja prikazuje tekstualnu poruku kada korisnik klikne na dugme "Show".
    1.Kada korisnik klikne na dugme "Hide", tekstualna poruka treba da se sakrije.
    <br />
    2.Kreiraj komponentu ToggleText.
    <br />
    3.U komponenti koristi useState za praćenje da li je tekst prikazan ili sakriven.
    <br />
    4.Dodaj dugme koje menja stanje između prikazanog i sakrivenog teksta.
  </p>

  <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
    <button className='text-white bg-black px-6 py-2' onClick={()=> setIsVisible(!isVisible)}>
      {isVisible ? 'Hide' : 'Show'}
    </button>
    {isVisible && <p>Ovo je prikazan teskt!</p>}
  </div>
</div>
);
}

//useState(false) postavlja početno stanje teksta kao sakriveno.
//setIsVisible(!isVisible) prebacuje stanje između true i false, što kontroliše prikazivanje ili sakrivanje teksta.

export default ToggleText;