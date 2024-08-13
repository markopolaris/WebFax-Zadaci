import React from 'react';

function BudgetList({ items, removeItem }) {
  const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);

  const categoryTotals = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = 0;
    acc[item.category] += item.amount;
    return acc;
  }, {});

  return (
    <div>
      <h2>Stavke:</h2>
      <ul>
        {items.map((item, index) => (
          <li className='mb-4' key={index}>
            {item.name} - ${item.amount.toFixed(2)} - {item.category}
            <button className='text-white bg-black px-6 py-2 ml-4' onClick={() => removeItem(index)}>Izbaci</button>
          </li>
        ))}
      </ul>
      <h3>Ukupna cena: ${totalAmount.toFixed(2)}</h3>
      <h3>Kategorije:</h3>
      <ul>
        {Object.entries(categoryTotals).map(([category, total], index) => (
          <li key={index}>{category}: ${total.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

export default BudgetList;
