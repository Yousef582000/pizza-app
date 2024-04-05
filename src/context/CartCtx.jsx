import { createContext, useContext, useEffect, useState } from "react";

const defaultVal = [];
export const CartCtx = createContext(defaultVal);

export const useCart = () => useContext(CartCtx);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // add to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];

      const existedElement = newCart.find((el) => +el.id === +product.id);
      if (!existedElement) {
        newCart.push({ ...product, count: 1, totalPrice: +product.price });
      } else {
        let newProduct = {
          ...existedElement,
          count: existedElement.count + 1,
          totalPrice: existedElement.price * (existedElement.count + 1),
        };
        const existedElementIndex = newCart.findIndex(
          (el) => +el.id === +product.id
        );
        newCart[existedElementIndex] = { ...newProduct };
      }
      return newCart;
    });
    // console.log(product);
  };
  // decrement from cart
  const handleDecrementFromCart = (product) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];

      const existedElement = newCart.find((el) => +el.id === +product.id);
      const existedElementIndex = newCart.findIndex(
        (el) => +el.id === +product.id
      );
      if (existedElement.count > 0) {
        let newProduct = {
          ...existedElement,
          count: existedElement.count - 1,
          totalPrice: existedElement.price * (existedElement.count - 1),
        };

        newCart[existedElementIndex] = { ...newProduct };
      } else {
        newCart.splice(existedElementIndex, 1);
      }
      return newCart;
    });
  };
  // remove from cart
  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];

      const existedElementIndex = newCart.findIndex(
        (el) => +el.id === +product.id
      );
      newCart.splice(existedElementIndex, 1);

      return newCart;
    });
  };
  // calc total price
  const getTotalPrice = () => {
    let totalPrice;
    totalPrice = cart.map((currentItem) => currentItem.totalPrice);
    let result = totalPrice.reduce((total, current) => {
      return +total + +current;
    }, 0);
    setTotalPrice(result);
  };

  useEffect(() => {
    getTotalPrice();
  }, [cart]);
  return (
    <CartCtx.Provider
      value={{
        cart,
        handleAddToCart,
        handleDecrementFromCart,
        handleRemoveFromCart,
        totalPrice,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};

export default CartContextProvider;
