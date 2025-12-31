import { useEffect, useState } from "react";
import productFetcher from "../productfetcher";

function Shop() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchProducts() {
            const data = await productFetcher();

            if (data) {
                setProducts(data)
            }
            else {
                setError('Failed to load products')
            }
        }
        fetchProducts();
    }, [])

    //Console Testing
    useEffect(() => {
        console.log('products updated:', products)
    }, [products])

    useEffect(() => {
        console.log('fetch error:', error)
    }, [error])

    return (
        <p>This is the shop content</p>
    )
}

export default Shop;