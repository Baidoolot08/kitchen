import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../ui/ProductCard";
import { Link } from "react-router-dom";
import "./Main.scss";
const Main = () => {
  const dispatch = useDispatch();
  const products = useSelector((s) => s.product);
  const categories = ["Breakfast", "Lunch", "Pastries", "Drinks"];
  function getProduct() {
    return async (dispatch) => {
      let res = await axios(
        `https://680759f2e81df7060eb9d564.mockapi.io/api/v1/books/organick`
      );
      dispatch({ type: "SET_PRODUCTS", payload: res.data });
    };
  }
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  console.log(products);
  return (
    <div className="main container">
      <div className="block">
        <div className="categories">
          {categories.map((el) => (
            <Link to={`category/${el}`} key={el} className="category-link">
              {el}
            </Link>
          ))}
        </div>
        <div className="products-grid">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((el) => <ProductCard product={el} key={el._id} />)
          ) : (
            <p className="no-products">Нет товаров для отображения</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
