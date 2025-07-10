import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../ui/ProductCard";
import "./Category.scss";

const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://680759f2e81df7060eb9d564.mockapi.io/api/v1/books/organick"
    );
    dispatch({ type: "SET_PRODUCTS", payload: res.data });
  } catch (err) {
    console.error("Ошибка загрузки товаров:", err);
  }
};

const Category = () => {
  const { cat } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((s) => s.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter(
    (el) => el.category?.toLowerCase() === cat?.toLowerCase()
  );

  return (
    <section className="container category">
      {filteredProducts.length > 0 && <h1>Категория: {cat}</h1>}
      <div className="category--page">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((el) => (
            <ProductCard product={el} key={el.id || el._id} />
          ))
        ) : (
          <p className="no-products">Нет товаров в категории "{cat}"</p>
        )}
      </div>
    </section>
  );
};

export default Category;
