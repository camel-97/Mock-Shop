import { useEffect, useState } from "react";
import productFetcher from "../productfetcher";
import { useOutletContext } from "react-router";
import '../css/shop.css'

function Shop() {

    const {cart, setCart} = useOutletContext();
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

    //Add to Cart handling
    function addToCart(id, qty) {
        const product = products.find(p => p.id === id);
        setCart(prev => {
            const existing = prev.find(item => item.id === id);
            if (existing) {
                return prev.map(item => item.id === id ? {...item, quantity: item.quantity + qty} : item)
            } else {
                return [...prev, {...product, quantity: qty}]
            }
        })
    }

    //console testing cart
    useEffect(() => {
        console.log('cart status following add:', cart)
    }, [cart])

    return (
        <div className="shop-grid">
            {products.map(product => (

                <div className="item-card" key={product.id}>
                    <h3 className="item-title">{product.title}</h3>
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
                        <button className="atc-btn" onClick={() => addToCart(product.id, quantity[product.id] || 1)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Shop;