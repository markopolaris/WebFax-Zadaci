import React, { useState, useEffect } from 'react';

function DataLoader() {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
// Simulate a data fetch
setTimeout(() => {
setData('Here is the fetched data!');
setLoading(false);
}, 2000);

// No cleanup needed in this case
}, []);

return (
<div className='text-center mt-10'>
    <p className='text-lg'>Opis: Napravite komponentu koja simulira učitavanje podataka sa servera i prikazuje "Loading..." dok podaci nisu učitani. Kada se podaci učitaju, prikažite ih.
        <br />
        1. Kreirajte komponentu DataLoader.
        <br />
        2. Koristite useState za praćenje stanja učitavanja i useEffect za simulaciju učitavanja podataka.
    </p>

    <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        {loading ? <p>Loading...</p> : <p>Data: {data}</p>}
    </div>
</div>
);
}

//useEffect simulira kašnjenje od 2 sekunde pre nego što postavi podatke i promeni stanje učitavanja.
//Dok se podaci učitavaju, prikazuje se "Loading...", a nakon što se podaci učitaju, prikazuje se sadržaj.

export default DataLoader;