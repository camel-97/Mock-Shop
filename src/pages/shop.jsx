import { useEffect, useState } from "react";
import productFetcher from "../productfetcher";
import { useOutletContext } from "react-router";
import '../css/shop.css'

function Shop() {

    const { cart, setCart } = useOutletContext();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState({});
    const [showTick, setShowTick] = useState({});
    const [loading, setLoading] = useState(false);


    //On mount fetch of all products
    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            const data = await productFetcher();

            if (data) {
                setProducts(data)
                setLoading(false);
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

    //Quantity reset
    function resetQuantity(id) {
        setQuantity(prev => ({ ...prev, [id]: 1 }))
    };

    //Add to Cart handling
    function addToCart(id, qty) {
        const product = products.find(p => p.id === id);
        setCart(prev => {
            const existing = prev.find(item => item.id === id);
            if (existing) {
                return prev.map(item => item.id === id ? { ...item, quantity: item.quantity + qty } : item)
            } else {
                return [...prev, { ...product, quantity: qty }]
            }
        })
    }

    //Show add confirmation
    function confirmWithTick(id) {
        setShowTick(prev => ({ ...prev, [id]: true }));
        setTimeout(() => setShowTick(prev => ({ ...prev, [id]: false })), 2000)
    };

    //console testing cart
    useEffect(() => {
        console.log('cart status following add:', cart)
    }, [cart])

    return (
        <main>
            {loading ? (<div className="loader"></div>) : (
            <div className="shop-grid">
                {products.map(product => (

                    <div className="item-card" key={product.id}>
                        <div className="item-title">{product.title}</div>
                        <hr />
                        <div className="item-img">
                            <img src={product.image} />
                        </div>
                        <h3>£{product.price}</h3>
                        <hr />

                        <div className="atc-cont">
                            <div className="cart-adjust-cont">
                                <div>Quantity:</div>
                                <button onClick={() => handleQuantity(product.id, -1)}>-</button>
                                <div>{quantity[product.id] || 1}</div>
                                <button onClick={() => handleQuantity(product.id, +1)}>+</button>
                            </div>
                            <button className="atc-btn" onClick={() => {
                                addToCart(product.id, quantity[product.id] || 1)
                                resetQuantity(product.id);
                                confirmWithTick(product.id);
                            }}>Add to Cart</button>
                        </div>
                        <div className={`added ${showTick[product.id] && 'visible'}`}>
                            ✔️ Added to cart!
                        </div>
                    </div>
                ))}
            </div>
            )}
        </main>
    )
}

export default Shop;