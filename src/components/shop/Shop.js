import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import Cart from '../cart/Cart';
import './Shop.css'
import { addToDb, storedShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = storedShoppingCart();
        let savedCart = [];

        for (let id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {

                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const cartExist = cart.find(product => product.id === selectedProduct.id);

        if (!cartExist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const restProduct = cart.filter(product => product.id !== selectedProduct.id);
            cartExist.quantity = cartExist.quantity + 1;
            newCart = [...restProduct, cartExist]
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h3>Total Products: {products.length}</h3>
                <div className='all-products'>
                    {
                        products.map(product => <Product product={product} key={product.id}
                            handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
            </div>

            <div className='cart-container'>
                <h3>Order Summary</h3>
                <hr />
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;