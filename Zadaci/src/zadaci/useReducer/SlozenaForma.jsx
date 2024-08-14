import React, { useReducer } from 'react';

const initialState = {
username: '',
email: '',
password: '',
confirmPassword: '',
errors: {}
};

function reducer(state, action) {
switch (action.type) {
case 'updateField':
return {
...state,
[action.field]: action.value,
errors: { ...state.errors, [action.field]: '' }
};
case 'validate':
const errors = {};
if (!state.username) errors.username = 'Username is required';
if (!state.email.includes('@')) errors.email = 'Email is invalid';
if (state.password.length < 6) errors.password='Password must be at least 6 characters' ; if (state.password
    !==state.confirmPassword) errors.confirmPassword='Passwords do not match' ; return { ...state, errors }; default:
    return state; } } function SlozenaForma() { const [state, dispatch]=useReducer(reducer, initialState); const
    handleChange=(e)=> {
    dispatch({
    type: 'updateField',
    field: e.target.name,
    value: e.target.value
    });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'validate' });
    if (Object.keys(state.errors).length === 0) {
    alert('Form submitted successfully!');
    }
    };

    return (
    <div className='text-center mt-10'>
        <p className='text-lg'>Opis: Napravite jednostavan brojač koji koristi useReducer umesto useState za upravljanje
            stanjem.
            <br />
            1.Kreirajte komponentu Counter.
            <br />
            2.Koristite useReducer za upravljanje stanjem brojača.
            <br />
            3.Reducer funkcija treba da podržava akcije: "increment" i "decrement".
            <br />
            4.Prikaz brojača sa dva dugmeta: jedno za povećanje, drugo za smanjenje vrednosti brojača.
        </p>

        <form className='text-xl mt-10 border-2 border-gray-300 py-10' onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input className='border-2 border-gray-300 p-2' type="text" name="username" value={state.username}
                    onChange={handleChange} />
                {state.errors.username && <p>{state.errors.username}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input className='border-2 border-gray-300 p-2' type="email" name="email" value={state.email}
                    onChange={handleChange} />
                {state.errors.email && <p>{state.errors.email}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input className='border-2 border-gray-300 p-2' type="password" name="password" value={state.password}
                    onChange={handleChange} />
                {state.errors.password && <p>{state.errors.password}</p>}
            </div>
            <div>
                <label>Confirm Password:</label>
                <input className='border-2 border-gray-300 p-2' type="password" name="confirmPassword"
                    value={state.confirmPassword} onChange={handleChange} />
                {state.errors.confirmPassword && <p>{state.errors.confirmPassword}</p>}
            </div>
            <button className='text-white bg-black px-6 py-2 mr-2' type="submit">Register</button>
        </form>
    </div>
    );
    }

    export default SlozenaForma;