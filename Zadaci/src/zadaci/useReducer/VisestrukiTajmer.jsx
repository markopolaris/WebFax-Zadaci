import React, { useReducer } from 'react';

const initialState = [];

function reducer(state, action) {
switch (action.type) {
case 'addTimer':
return [...state, { id: action.payload.id, time: 0, running: false }];
case 'startTimer':
return state.map(timer =>
timer.id === action.payload.id ? { ...timer, running: true } : timer
);
case 'stopTimer':
return state.map(timer =>
timer.id === action.payload.id ? { ...timer, running: false } : timer
);
case 'resetTimer':
return state.map(timer =>
timer.id === action.payload.id ? { ...timer, time: 0 } : timer
);
case 'tick':
return state.map(timer =>
timer.running ? { ...timer, time: timer.time + 1 } : timer
);
default:
return state;
}
}

function VisestrukiTajmer() {
const [timers, dispatch] = useReducer(reducer, initialState);

const addTimer = () => {
dispatch({ type: 'addTimer', payload: { id: Date.now() } });
};

const startTimer = (id) => {
dispatch({ type: 'startTimer', payload: { id } });
};

const stopTimer = (id) => {
dispatch({ type: 'stopTimer', payload: { id } });
};

const resetTimer = (id) => {
dispatch({ type: 'resetTimer', payload: { id } });
};

React.useEffect(() => {
const interval = setInterval(() => {
dispatch({ type: 'tick' });
}, 1000);

return () => clearInterval(interval);
}, []);

return (
<div className='text-center mt-10'>
    <p className='text-lg'>Opis: Napravite aplikaciju koja omogućava korisniku da dodaje više tajmera, koji se pokreću i
        zaustavljaju nezavisno jedan od drugog.
        <br />
        1.Kreirajte komponentu Timers.
        <br />
        2.Koristite useReducer za upravljanje nizom tajmera, pri čemu svaki tajmer ima svoj ID, vreme i status
        (pokrenut/zaustavljen).
        <br />
        3.Reducer funkcija treba da podržava sledeće akcije:
        <br />
        "addTimer": Dodaje novi tajmer.
        <br />
        "startTimer": Pokreće određeni tajmer.
        <br />
        "stopTimer": Zaustavlja određeni tajmer.
        <br />
        "resetTimer": Resetuje vreme određenog tajmera.
        <br />
        4.Prikaz brojača sa dva dugmeta: jedno za povećanje, drugo za smanjenje vrednosti brojača.
    </p>

    <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <h2>Tajmeri</h2>
        <button className='text-white bg-black px-6 py-2' onClick={addTimer}>Dodaj Tajmer</button>

        <ul>
            {timers.map(timer => (
            <li key={timer.id}>
                Tajmer {timer.id}: {timer.time} sekunde
                <button className='text-white bg-black px-6 py-2' onClick={()=> startTimer(timer.id)}>Start</button>
                <button className='text-white bg-black px-6 py-2' onClick={()=> stopTimer(timer.id)}>Stop</button>
                <button className='text-white bg-black px-6 py-2' onClick={()=> resetTimer(timer.id)}>Reset</button>
            </li>
            ))}
        </ul>
    </div>
</div>
);
}

export default VisestrukiTajmer;