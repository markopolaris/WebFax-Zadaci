import React, { useState, useEffect } from 'react';

function PageVisits() {
const [visits, setVisits] = useState(0);

useEffect(() => {
const storedVisits = sessionStorage.getItem('visits');
const currentVisits = storedVisits ? parseInt(storedVisits) : 0;
setVisits(currentVisits + 1);
sessionStorage.setItem('visits', currentVisits + 1);
}, []);

return (
<div className='text-center mt-10'>
  <p className='text-lg'>Opis: Napravite jednostavnu komponentu koja broji koliko puta je korisnik posetio određenu stranicu tokom sesije. Broj poseta treba da se čuva u sessionStorage i da se prikazuje korisniku.</p>

    <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <h2>Ova stranica je posecena {visits} puta tokom ove sesije.</h2>
    </div>
</div>
);
}

export default PageVisits;