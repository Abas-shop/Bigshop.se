type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
};

const products: Product[] = [
    { id: 1, name: "Produkt 1", description: "Beskrivning 1", price: 100 },
    { id: 2, name: "Produkt 2", description: "Beskrivning 2", price: 200 },
];

return (
    <ul>
        {products.map((product) => (
            <li key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Pris: {product.price} kr</p>
            </li>
        ))}
    </ul>
);
const fetchProducts = async (): Promise<Product[]> => {
    const res = await fetch("/api/products");
    return res.json();
};
