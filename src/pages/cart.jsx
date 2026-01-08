import { useState } from "react";
import { useOutletContext } from "react-router";
import '../css/cart.css'

function Cart() {

    const { cart, setCart } = useOutletContext()

    const totalqty = cart.reduce((total, item) => total + item.quantity, 0);
    const totalprice = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

    const perproductcost = (cost, quantity) => {
        return ((cost * quantity).toFixed(2));
    }

    function decQty(id) {
        setCart(prevCart =>
            prevCart.map(item => {
                if (item.id === id) {
                    const newQty = item.quantity - 1;
                    if (newQty <= 0) {
                        return null;
                    } return { ...item, quantity: newQty }
                }
                return item;
            }).filter(Boolean)
        );
    };

    function incQty(id) {
        setCart(prevCart =>
            prevCart.map(item => {
                if (item.id === id) {
                    const newQty = item.quantity + 1;
                    return { ...item, quantity: newQty };
                } return item;
            })
        )
    }

    return (
        <main>
        <div className="cart-card">
            <div className="items">
                <div className="cart-header">
                    <div className="cart-title">Shopping Cart</div>
                    <div>{totalqty} items</div>
                    <hr />
                </div>
                {totalqty <= 0 ? (
                    <div className="empty-cart">Cart Empty</div>
                ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(product => (
                            <tr key={product.id}>
                                <td className="title-cell">
                                    <div className="cart-img-div">
                                        <img src={product.image} alt={product.title} />
                                        <span>{product.title}</span>
                                    </div>
                                </td>
                                <td className="max-w-cell adj-btn">
                                    <div className="adj-btns">
                                        <button className="dec-btn" onClick={() => { decQty(product.id) }}>-</button>
                                        <span className="qty-cell">{product.quantity}</span>
                                        <button className="inc-btn" onClick={() => { incQty(product.id) }}>+</button>
                                    </div>
                                </td>
                                <td className="max-w-cell price-cell">£{product.price}</td>
                                <td className="total-cell max-w-cell">£{perproductcost(product.price, product.quantity)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
            )}
            </div>
            <div className="summary">
                <div>Order Summary</div>
                <hr />
                <div className="summary-info">
                    <div>
                        <div>Sub-Total:</div>
                        <div>£{totalprice}</div>
                    </div>
                    <div>
                        <div>Shipping Cost:</div>
                        <div>Calculated at Checkout</div>
                    </div>
                    <div>
                        <div>VAT:</div>
                        <div>N/A</div>
                    </div>
                </div>
                <hr />
                <button className="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
        </main>
    )
}

export default Cart;