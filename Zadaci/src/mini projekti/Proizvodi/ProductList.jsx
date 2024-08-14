import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

function ProductList() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchProducts = async () => {
try {
const response = await fetch('https://fakestoreapi.com/products?limit=5');
if (!response.ok) {
throw new Error('Failed to fetch products');
}
const data = await response.json();
setProducts(data);
} catch (error) {
setError(error.message);
} finally {
setLoading(false);
}
};

fetchProducts();
}, []); // Efekat se pokreće samo kada se komponenta prvi put montira

if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;

return (
<div className='text-center mt-10'>
    <p className='text-lg'>
        1. ProductList: Preuzima 5 proizvoda sa API-ja pomoću fetch i postavlja ih u stanje koristeći useState. Ako dođe do greške prilikom preuzimanja podataka, prikazuje se poruka o grešci.
        <br />
        2. ProductItem: Prikazuje podatke za svaki proizvod. Ova komponenta prikazuje sliku, naslov, opis (skraćen na 100 karaktera) i cenu.
        <br />
        3. App: Glavna komponenta koja samo renderuje ProductList.
    </p>

    <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <h1>Proizvodi</h1>
        <div style={{ display: 'flex',  }}>
            {products.map((product) => (
            <ProductItem key={product.id} product={product} />
            ))}
        </div>
    </div>
</div>
);
}

export default ProductList;