"use client"; // Krävs för att använda useState och useEffect i en klientkomponent

import { useState, useEffect } from "react";

// Definiera en typ för en produkt
type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
};

export default function Products() {
    // Använd useState med rätt typ
    const [products, setProducts] = useState<Product[]>([]);

    // Funktion för att hämta produkter från API:et
    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json()) // Omvandla svaret till JSON
            .then((data: Product[]) => setProducts(data)) // Ange att data är en lista av Product
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
