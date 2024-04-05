import React from "react";
import styles from "./Cart.module.css";
import garbage from "../../images/cart/garbage.png";
import { createPortal } from "react-dom";
import { useCart } from "../../context/CartCtx";
import { useNavigate } from "react-router-dom";

const Cart = ({ showCart, handleCloseCart }) => {
  const navigate = useNavigate();
  const {
    handleAddToCart,
    handleDecrementFromCart,
    handleRemoveFromCart,
    cart,
    totalPrice,
  } = useCart();
  const handleNavigate = () => {
    handleCloseCart();
    navigate("/menu");
  };
  return createPortal(
    <>
      <div className={styles["overlay"]} onClick={handleCloseCart}></div>
      <div className={styles["cart-modal"]}>
        <div className={styles["cart-wrapper"]}>
          <div className={styles["cart-container"]}>
            <div className={styles["close"]} onClick={handleCloseCart}>
              x
            </div>
            <div className={styles["main-title"]}>Basket</div>
            <div className={styles["products-container"]}>
              {cart.length > 0 ? (
                cart.map((product) => (
                  <div className={styles["product-content"]}>
                    <div className={styles["product-main-info"]}>
                      <div className={styles["count"]}>
                        {product.count}
                        <span>x</span>
                      </div>
                      <div className={styles["img"]}>
                        <img src={product.img} alt="" />
                      </div>
                      <div className={styles["product-info"]}>
                        <h5 className={styles["product-title"]}>
                          {product.title}
                        </h5>
                        <p className={styles["product-desc"]}>{product.desc}</p>
                      </div>
                    </div>
                    <div className={styles["price-control"]}>
                      <div className={styles["controls"]}>
                        <button
                          onClick={() => handleDecrementFromCart(product)}
                        >
                          -
                        </button>
                        <button
                          className={styles["remove"]}
                          onClick={() => handleRemoveFromCart(product)}
                        >
                          <img src={garbage} alt="" />
                        </button>

                        <button onClick={() => handleAddToCart(product)}>
                          +
                        </button>
                      </div>
                      {/* <p className={styles["price"]}>CHF {+product.price}</p> */}
                      <p className={styles["price"]}>
                        CHF{+product.totalPrice}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className={styles["empty"]}>
                    Empty Cart, go to our menu page and choose{" "}
                  </div>
                  <button
                    className={styles["navigate"]}
                    onClick={handleNavigate}
                  >
                    Go to Menu
                  </button>
                </>
              )}
            </div>
            {cart.length > 0 && (
              <>
                <div className={styles["total"]}>
                  <p>Total</p>
                  <p>{totalPrice.toFixed(2)} CHF</p>
                </div>
                <button className={styles["order"]}>weitermachen</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
 
};

export default Cart;
