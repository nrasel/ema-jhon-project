import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        console.log('api called')
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        console.log('local storage called')
        if (products.length) {
            const savedCart = getStoredCart()
            const storedCart = []
            for (let key in savedCart) {
                const addedProduct = products.find(product => product.key === key)
                storedCart.push(addedProduct)
            }
            setCart(storedCart)
        }
        console.log('product reveived')
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        // set local storage
        addToDb(product.key)
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;