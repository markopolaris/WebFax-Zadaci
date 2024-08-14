import React, { useState } from 'react';
import AddItemForm from './AddItemForm';
import BudgetList from './BudgetList';

function Budget() {
const [items, setItems] = useState([]);

const addItem = (item) => {
setItems([...items, item]);
};

const removeItem = (index) => {
setItems(items.filter((_, i) => i !== index));
};

return (
<div className='text-center mt-10'>
  <p className='text-lg'>Opis: Napravite aplikaciju koja omogućava korisnicima da dodaju, uklone i prikažu stavke
    budžeta. Svaka stavka ima naziv, iznos, i kategoriju. Korisnici treba da mogu da dodaju stavke u budžet, uklone ih,
    i vide ukupnu sumu potrošenog novca po kategorijama.
    <br />
    <b>Komponente:</b>
    <br />
    AddItemForm - Komponenta za unos novih stavki.
    <br />
    BudgetList - Komponenta za prikaz stavki i ukupnih troškova.
    <br />
    Budget - Glavna komponenta koja povezuje sve ostale.
  </p>

  <div className='mt-10'>
    <AddItemForm addItem={addItem} />
    <BudgetList items={items} removeItem={removeItem} />
  </div>
</div>
);
}

export default Budget;