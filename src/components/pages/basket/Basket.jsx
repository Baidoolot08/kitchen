import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../ui/ProductCard";
import "./Basket.scss";
import cart from "../../../assets/images/cart.webp";
const Basket = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  const totalPrice = basket.reduce((acc, item) => acc + Number(item.price), 0);

  const clearBasket = () => {
    dispatch({ type: "CLEAR_BASKET" });
  };

  return (
    <section id="basket">
      <div className="container">
        {Array.isArray(basket) && basket.length > 0 ? (
          <>
            <div className="basket-grid">
              {basket.map((item) => (
                <ProductCard product={item} key={item.id || item._id} />
              ))}
            </div>

            <div className="basket-footer">
              <p className="total-price">Итого: {totalPrice}$</p>
              <button className="clear-btn" onClick={clearBasket}>
                Очистить корзину
              </button>
            </div>
          </>
        ) : (
          <div className="empty-basket">
            <img src={cart} alt="Пустая корзина" width={400} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Basket;
