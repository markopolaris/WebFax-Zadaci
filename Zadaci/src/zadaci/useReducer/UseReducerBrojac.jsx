import React, { useReducer } from 'react';

const initialState = 0;

function reducer(state, action) {
switch (action.type) {
case 'rast':
return state + 1;
case 'pad':
return state - 1;
default:
return state;
}
}

function UseReducerBrojac() {
const [count, dispatch] = useReducer(reducer, initialState);

return (
<div className='text-center mt-10'>
    <p className='text-lg'>Opis: Napravite aplikaciju za složen obrazac (npr. registracija) koji koristi useReducer za upravljanje stanjem forme, uključujući validaciju unosa.
        <br />
        1.Kreirajte komponentu RegistrationForm.
        <br />
        2.Koristite useReducer za upravljanje stanjima unosa za korisničko ime, email, lozinku i potvrdu lozinke.
        <br />
        3.Reducer funkcija treba da podržava sledeće akcije"
        <br />
        "updateField": Ažurira vrednost polja.
        <br />
        "validate": Validira unose kada se obrazac podnese.
        <br />
        4. Prikaz forme sa unosnim poljima i prikaz poruka o greškama ako unosi nisu validni.
    </p>

    <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <p>Brojac: {count}</p>
        <button className='text-white bg-black px-6 py-2' onClick={()=> dispatch({ type: 'rast' })}>+</button>
        <button className='text-white bg-black px-6 py-2' onClick={()=> dispatch({ type: 'pad' })}>-</button>
    </div>
</div>
);
}

export default UseReducerBrojac;