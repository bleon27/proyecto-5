import React, { useEffect, useState } from 'react'

const CartContext = React.createContext()

const { Provider, Consumer } = CartContext

const STORAGE_KEY = "cart"

const parseCart = (cartString) => {
    try {
        if (!cartString || !cartString.length) throw Error()
        const parsed = JSON.parse(cartString);
        return parsed
    } catch (error) {
        return []
    }
}

const serializeCart = (cart) => JSON.stringify(cart)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cartResume, setCartResume] = useState(null)

    useEffect(() => {
        let storedCart = localStorage.getItem(STORAGE_KEY)
        let parsed = parseCart(storedCart)
        setCartResume(getResume(parsed))
        setCart(parsed)
    }, [])

    const addItem = (newItem) => {
        var cartCopy = Array.from(cart);
        var item = [];
        if (typeof newItem.id == 'undefined') {
            item = cart.find(item => item.id === newItem._id)
        } else {
            item = cart.find(item => item.id === newItem.id)
        }
        if (item) {
            item.quantity++;
        } else {
            cartCopy.push({
                id: newItem.id,
                title: newItem.title,
                price: newItem.price,
                quantity: 1
            })
        }
        localStorage.setItem(STORAGE_KEY, serializeCart(cartCopy))
        setCart(cartCopy);
        getResume(cartCopy);
    }

    const decreaseItem = (newItem) => {
        var cartCopy = Array.from(cart);

        var item = cart.find(item => item.id === newItem._id)
        if (item) {
            if (item.quantity > 0) {
                item.quantity--;
            }
        } /*else {
            cartCopy.push({
                sku: newItem.sku,
                title: newItem.title,
                price: newItem.price,
                quantity: 1
            })
        }*/
        localStorage.setItem(STORAGE_KEY, serializeCart(cartCopy))
        setCart(cartCopy);
        getResume(cartCopy);
    }

    const getQuantity = () => {
        var sumatoria = 0;
        for (const item of cart) {
            sumatoria += item.quantity;
        }
        return sumatoria;
    }

    const getResume = (cart) => {
        var resume = { "amount": cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) }
        resume["tax"] = (resume.amount * (process.env.REACT_APP_TAX_PCTG / 100)).toFixed(2)
        resume["total"] = resume.amount + resume.tax
        
        setCartResume(resume)
        return resume
    }

    const deleteItem = (id) => {
        var cartCopy = Array.from(cart);
        const itemIndex = cart.findIndex(item => item.id === id)
        if (itemIndex => 0) {
            cartCopy.splice(itemIndex, 1)
            localStorage.setItem(STORAGE_KEY, serializeCart(cartCopy))
            setCart(cartCopy)
            getResume(cartCopy);
        }
    }

    const empty = () => {
        cart.splice(0, cart.length);
        localStorage.removeItem(STORAGE_KEY)
    }

    return (
        <Provider value={{ cart, getQuantity, cartResume, addItem, deleteItem, empty, decreaseItem }}>
            {children}
        </Provider>
    )
}

export { CartProvider, Consumer as CartConsumer, CartContext }