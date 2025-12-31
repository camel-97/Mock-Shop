import { useEffect, useState } from "react";
import productFetcher from "../productfetcher";

function Shop() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState({});


    //On mount fetch of all products
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


    //Quantity Change handling
    function handleQuantity(id, delta) {
        setQuantity(prev => ({
            ...prev, [id]: Math.max(1, (prev[id] || 1) + delta) 
        }))
    };

    return (
        <>
            {products.map(product => (

                <div className="item-card" key={product.id}>
                    <h2 className="item-title">{product.title}</h2>
                    <div className="item-img">
                        <img src={product.image} />
                    </div>
                    <h3>£{product.price}</h3>

                    <div className="atc-cont">
                        <div className="cart-adjust-cont">
                            <div>Quantity:</div>
                            <button onClick={() => handleQuantity(product.id, -1)}>-</button>
                            <div>{quantity[product.id] || 1}</div>
                            <button onClick={() => handleQuantity(product.id, +1)}>+</button>
                        </div>
                        <button className="atc-btn">Add to Cart</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Shop;