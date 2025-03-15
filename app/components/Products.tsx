"use client"; // Gör att vi kan använda useState och useEffect

import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]); // Skapar en state för att lagra produkterna

    // Funktion för att hämta produkter från API:et
    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json()) // Omvandla svaret till JSON
            .then((data) => setProducts(data)) // Spara datan i vår state
            .catch((error) => console.error("Fel vid hämtning av produkter:", error));
    }, []);

    return (
        <div>
            <h2>Produkter</h2>
            <ul>
                {products.length > 0 ? (
                    products.map((product) => (
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Pris: {product.price} kr</p>
                        </li>
                    ))
                ) : (
                    <p>Inga produkter tillgängliga</p>
                )}
            </ul>
        </div>
    );
}
