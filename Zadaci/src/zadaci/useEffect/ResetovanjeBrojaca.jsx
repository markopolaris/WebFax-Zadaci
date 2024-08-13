import React, { useState, useEffect } from 'react';

function ResetovanjeBrojaca() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Ciscenje intervala nakon 5 sekundi
    const resetTimer = setTimeout(() => {
      clearInterval(timer);
      setCount(0);
    }, 6000);

    return () => {
      clearInterval(timer);
      clearTimeout(resetTimer);
    };
  }, []);

  return (

    <div className='text-center mt-10'>
    <p className='text-lg'>Opis: Napravite komponentu koja prikazuje brojač koji se automatski resetuje na 0 nakon 5 sekundi. Brojač treba da se poveća svake sekunde.
        <br />
        1. Kreirajte komponentu AutoResetCounter.
        <br />
        2. Koristite useState za praćenje brojača i useEffect za automatsko resetovanje brojača nakon 5 sekundi.
        <br />
        3. Prikazujte trenutnu vrednost brojača.
    </p>
        <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <p>Trenutno brojenje: {count}</p>
        </div>
    </div>
  );
}

//useEffect pokreće interval koji povećava brojač svake sekunde.
//setTimeout koristi se za resetovanje brojača na 0 nakon 5 sekundi.
//return funkcija se koristi za čišćenje intervala i timeout-a kada se komponenta demontira ili efekat se ponovo pokreće.

export default ResetovanjeBrojaca;
