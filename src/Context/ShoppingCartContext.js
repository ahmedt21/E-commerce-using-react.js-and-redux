// import { createContext, useContext, useState } from "react";


// const ShoppingCartContext = createContext({});


// const ShoppingCartProvider = ({ Children }) => {
//     const [cartItems, setCartItems] = useState([])
//     const getItemsQuantity = (id) => {
//         return cartItems.find((item)=> item.id === id)?.quantity || 0
//     }
//     const increaseCartQuantity = (id) => {
//         setCartItems((currItems) => {
//             if (currItems.find(item => item.id === id) == null) {
//                 return [...currItems, { id, quantity: 1 }]
//             } else {
//                 return currItems.map((item) => {
//                     if (item.id === id) {
//                         return { ...item, quantity: item.quantity + 1 };
//                     } else {
//                         return item;
//                     }
//                 })
//             }
//         })
//     };
//     const decreaseCartQuantity = (id) => {
//         setCartItems((currItems) => {
//             if (currItems.find(item => item.id === id) == null) {
//                 return currItems.filter((item) => item.id !== id);
//             } else {
//                 return currItems.map((item) => {
//                     if (item.id === id) {
//                         return { ...item, quantity: item.quantity - 1 };
//                     } else {
//                         return item;
//                     }
//                 })
//             }
//         })
//     };
//     const removeItemFormCart = (id) => {
//         setCartItems((currItems) => currItems.filter((item) => item.id !== id));
//     };
//     return (
//         <ShoppingCartContext.Provider value={{ cartItems , getItemsQuantity , increaseCartQuantity , decreaseCartQuantity , removeItemFormCart }}>{ Children }</ShoppingCartContext.Provider>  
//     );
// };


// export default ShoppingCartProvider;

// export const useShoppingCart = () => {
//     return useContext(ShoppingCartContext);
// };