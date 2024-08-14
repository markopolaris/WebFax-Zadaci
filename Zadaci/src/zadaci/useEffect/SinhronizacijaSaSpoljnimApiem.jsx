import React, { useState, useEffect } from 'react';

function Sinhronizacija() {
const [news, setNews] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchNews = async () => {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();
setNews(data.slice(0, 5)); // Prikazujemo prvih 5 vesti
} catch (error) {
setError('Failed to fetch news');
} finally {
setLoading(false);
}
};

fetchNews();
}, []); // Ovaj efekat se pokreće samo kada se komponenta prvi put montira

if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;

return (
<div className='text-center mt-10'>
    <p className='text-lg'>Opis: Napravite komponentu koja prikazuje naslove vesti preuzetih sa API-ja. Koristite useEffect za učitavanje vesti sa API-ja kada se komponenta montira. Prikazujte naslove u listi.
        <br />
        1. Kreirajte komponentu NewsFeed.
        <br />
        2. Koristite useState za praćenje vesti i useEffect za učitavanje vesti sa API-ja.
    </p>

  <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
    <h2 className='font-bold'>Novosti</h2>
    <ul>
      {news.map((item) => (
      <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  </div>
</div>
);
}

//useEffect se koristi za učitavanje vesti sa API-ja kada se komponenta prvi put montira.
//fetchNews funkcija asinkrono preuzima podatke i ažurira stanje.
//Stanje loading se koristi za prikaz poruke dok se podaci učitavaju, dok error pokazuje poruku o grešci ako dođe do problema.

export default Sinhronizacija;