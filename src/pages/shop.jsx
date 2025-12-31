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
        <>
        {products.map(product => (
            <>
            <div className="item-card" key={product.id}>
                <h2 className="item-title">{product.title}</h2>
                <div className="item-img">
                    <img src={product.image}/>
                </div>
                <h3>£{product.price}</h3>
            </div>
            <div className="atc-cont">
                <button className="atc-btn">Add to Cart</button>
                <div className="cart-adjust-cont">
                    <div>Quantity:</div>
                    <button>-</button>
                    <div>0</div>
                    <button>+</button>
                </div>
            </div>
            </>

        ))}
        </>
    )
}

export default Shop;