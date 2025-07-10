import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./Admin.scss";

const Admin = () => {
  const dispatch = useDispatch();
  const product = useSelector((s) => s.product);

  const [formData, setFormData] = useState({
    url: "",
    des: "",
    name: "",
    count: 1,
    price: "",
    category: "",
  });

  const { url, name, price, category, des } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !url.trim() ||
      !price.trim() ||
      !category.trim() ||
      !des.trim()
    )
      return alert("Заполните все поля !");
    try {
      const res = await axios.post(
        "https://680759f2e81df7060eb9d564.mockapi.io/api/v1/books/organick",
        formData
      );
      dispatch({ type: "CREATE_PRODUCT", payload: res.data });

      setFormData({
        url: "",
        des: "",
        name: "",
        count: 1,
        price: "",
        category: "",
      });
      alert("Товар успешно добавлен");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="admin">
      <p className="admin__title">
        <i>
          вы можете добавить продукты так как вы являетесь администратором!!!
        </i>
      </p>
      <form onSubmit={handleCreate} className="admin__form">
        <input
          type="text"
          name="url"
          value={url}
          onChange={handleChange}
          placeholder="product url"
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="product name"
        />
        <input
          type="text"
          name="des"
          value={des}
          onChange={handleChange}
          placeholder="product description"
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={handleChange}
          placeholder="product price"
        />
        <select name="category" value={category} onChange={handleChange}>
          <option value="" disabled hidden>
            category
          </option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Pastries">Pastries</option>
          <option value="Drinks">Drinks</option>
        </select>
        <button type="submit">CREATE</button>
      </form>
    </section>
  );
};

export default Admin;
