import React from "react";
import { useDispatch } from "react-redux";
import { ShoppingCart, Tag, Layers } from "lucide-react";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { url, name, price, category, des } = product;

  const addToBasket = () => {
    dispatch({ type: "ADD_TO_BASKET", payload: { ...product, count: 1 } });
  };

  return (
    <div className="product-card">
      <img src={url} alt={name} />
      <h3>{name}</h3>

      <div className="info-row category">
        <Layers />
        <span>Категория: {category}</span>
      </div>
      <div className="info-row price">
        <Tag />
        <span>Цена: ${price}</span>
      </div>
      {des && <p>{des.length > 30 ? des.slice(0, 30) + "..." : des}</p>}
      <div className="btn">
        <button onClick={addToBasket}>
          <ShoppingCart />
          <span>Добавить в корзину</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
