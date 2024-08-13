import React, { useState } from 'react';

function Glasanje() {
const [votesOptionA, setVotesOptionA] = useState(0);
const [votesOptionB, setVotesOptionB] = useState(0);

const totalVotes = votesOptionA + votesOptionB;

const percentageA = totalVotes === 0 ? 0 : ((votesOptionA / totalVotes) * 100).toFixed(2);
const percentageB = totalVotes === 0 ? 0 : ((votesOptionB / totalVotes) * 100).toFixed(2);

return (
<div className='text-center mt-10'>
    <p className='text-lg'>Opis: Napravi komponentu za glasanje gde korisnici mogu glasati za jednu od dve opcije. Komponenta treba da prikaže broj glasova za svaku opciju, kao i procente koji prikazuju udeo glasova za svaku opciju.
        <br />
        1. Kreiraj komponentu Glasanje.
        <br />
        2. U komponenti koristi useState za praćenje broja glasova za svaku opciju.
        <br />
        3. Prikaži broj glasova i procente za svaku opciju.
    </p>

    <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <h3>Koji je sportista bolji?</h3>
        <button className='text-white bg-black px-6 py-2 mr-4 mt-4' onClick={()=> setVotesOptionA(votesOptionA + 1)}>Vote for Option A</button>
        <button className='text-white bg-black px-6 py-2 mb-4' onClick={()=> setVotesOptionB(votesOptionB + 1)}>Vote for Option B</button>
        <div>
            <p>Novak Djokovic: {votesOptionA} votes ({percentageA}%)</p>
            <p>Nikola Jokic: {votesOptionB} votes ({percentageB}%)</p>
            <p className='font-bold'>Total Votes: {totalVotes}</p>
        </div>
    </div>
</div>
);
}

//useState(0) inicijalizuje broj glasova za svaku opciju na 0.
//Dugmad omogućavaju korisnicima da glasaju, povećavajući broj glasova za odabranu opciju.
//Procenti se izračunavaju deljenjem broja glasova za određenu opciju sa ukupnim brojem glasova, uz prikaz sa dve decimale.

export default Glasanje;