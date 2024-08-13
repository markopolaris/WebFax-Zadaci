import React, { useState } from 'react';

function JednostavniKalkulator() {
const [num1, setNum1] = useState('');
const [num2, setNum2] = useState('');
const [result, setResult] = useState(null);
const [memory, setMemory] = useState(null);

const calculate = (operator) => {
const number1 = parseFloat(num1);
const number2 = parseFloat(num2);

if (isNaN(number1) || isNaN(number2)) return;

let res;
switch (operator) {
case '+':
res = number1 + number2;
break;
case '-':
res = number1 - number2;
break;
case '*':
res = number1 * number2;
break;
case '/':
res = number1 / number2;
break;
default:
return;
}

setResult(res);
};

return (
<div className='text-center mt-10'>
  <p className='text-lg'>Opis: Napravi jednostavan kalkulator koji može da sabira, oduzima, množi i deli dva broja. Pored osnovnih funkcija, dodaj dugme "Memorize" koje čuva trenutni rezultat i prikazuje ga ispod kalkulatora.
    <br />
    1. Kreiraj komponentu Calculator.
    <br />
    2. U komponenti koristi useState za praćenje unosa brojeva, rezultata i memorisanog rezultata.
    <br />
    3. Dodaj osnovne funkcije za sabiranje, oduzimanje, množenje i deljenje.
  </p>

    <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <input className='border-2 border-gray-300 p-2' type="number" value={num1} onChange={(e)=> setNum1(e.target.value)}
        placeholder="First number"
        />
        <input className='border-2 border-gray-300 p-2' type="number" value={num2} onChange={(e)=> setNum2(e.target.value)}
        placeholder="Second number"
        />
        <div className='my-4'>
            <button className='text-white bg-black px-6 py-2 mr-2' onClick={()=> calculate('+')}>+</button>
            <button className='text-white bg-black px-6 py-2 mr-2' onClick={()=> calculate('-')}>-</button>
            <button className='text-white bg-black px-6 py-2 mr-2' onClick={()=> calculate('*')}>*</button>
            <button className='text-white bg-black px-6 py-2 mr-2' onClick={()=> calculate('/')}>/</button>
        </div>
        <p>Result: {result}</p>
        <button className='text-white bg-black px-6 py-2 mr-2' onClick={()=> setMemory(result)}>Memorize</button>
        {memory !== null && <p>Memory: {memory}</p>}
    </div>
</div>
);
}

export default JednostavniKalkulator;