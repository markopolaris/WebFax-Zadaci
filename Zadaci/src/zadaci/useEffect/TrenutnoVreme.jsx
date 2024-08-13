import React, { useState, useEffect } from 'react';

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='text-center mt-10'>
    <p className='text-lg'>Opis: Napravite komponentu koja prikazuje trenutno vreme i automatski se ažurira svake sekunde.
        <br />
        1. Kreirajte komponentu CurrentTime.
        <br />
        2.Koristite useState za praćenje trenutnog vremena i useEffect za ažuriranje vremena svake sekunde.
    </p>

        <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <p>Trenutno vreme: {time.toLocaleTimeString()}</p>
        </div>
    </div>
  );
}

//useEffect koristi interval za ažuriranje vremena svakih sekundu.
//return funkcija se koristi za čišćenje intervala kada se komponenta demontira ili efekat se ponovo pokreće.

export default CurrentTime;
