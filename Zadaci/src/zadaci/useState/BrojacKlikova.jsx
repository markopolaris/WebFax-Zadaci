import { useState } from 'react';

function BrojacKlikova() {

const [count, setCount] = useState(0);

return (
<div className='text-center mt-10'>
    <p className='text-lg'>Opis: Napravi komponentu koja prikazuje broj klikova na dugme. Svaki put kada korisnik klikne
        na dugme, broj klikova treba da se poveća za 1.
        <br />
        1.Kreiraj komponentu Brojac Klikova.
        <br />
        2.U komponenti koristi useState za praćenje broja klikova.
        <br />
        3.Dodaj dugme koje, kada se klikne, povećava broj klikova.
    </p>

    <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <p>Kliknuo si {count} puta</p>
        <button className='text-white bg-black px-6 py-2' onClick={()=> setCount(count + 1)}>
            Klikni
        </button>
    </div>
</div>
);
}

//useState(0) inicijalizuje stanje sa početnom vrednošću 0.
//setCount(count + 1) ažurira stanje svaki put kada se dugme klikne, što izaziva ponovno renderovanje komponente i prikaz nove vrednosti.

export default BrojacKlikova;