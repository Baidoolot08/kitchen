import React, { useState, useEffect } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/layout/header/Header";
import Main from "./components/pages/main/Main";
import Admin from "./components/pages/admin/Admin";
import Footer from "./components/layout/footer/Footer";
import Loading from "./components/ui/Loading";
import Basket from "./components/pages/basket/Basket";
import Category from "./components/pages/category/Category";

function App() {
  const [loading, setLoading] = useState(true);
  const dark = useSelector((s) => s.dark);

  const routes = [
    { id: 1, path: "/", element: <Main /> },
    { id: 2, path: "/admin", element: <Admin /> },
    { id: 3, path: "/basket", element: <Basket /> },
    { id: 4, path: "/category/:cat", element: <Category /> },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 11900);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className={`app ${dark ? "dark" : "light"}`}>
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
