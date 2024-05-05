import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getQuantity: (id: number) => number
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    removeFormCart: (id: number) => void
    cartQuantity: number
    cartItems: CarItem[]
}

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CarItem = {
    id: number
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)


export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartProviderProps){
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CarItem[]>([]);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    function getQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null){
                return [...currItems, {id, quantity:1}]
            }else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1){
                return currItems.filter(item => item.id !== id)
            }else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }

    function removeFormCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        });
        
    }

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    return (
        <ShoppingCartContext.Provider value={{getQuantity,increaseQuantity,decreaseQuantity,removeFormCart,cartItems,cartQuantity,openCart,closeCart}}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}