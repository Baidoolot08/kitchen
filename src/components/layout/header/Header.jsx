import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";
import { FaOpencart, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { RxMoon } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../assets/images/logo.png";
import "./Header.scss";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);

  const nav = useNavigate();
  const dispatch = useDispatch();
  const dark = useSelector((s) => s.dark);

  const handleLogin = () => {
    if (login === "admin" && password === "admin123") {
      nav("/admin");
      setModal(false);
    } else {
      alert("❌ Неправильный логин или пароль");
      setLogin("");
      setPassword("");
    }
  };

  return (
    <div className={`header ${dark ? "header--dark" : "header--light"}`}>
      <div className="header__content">
        <img
          src={logo}
          alt="Logo"
          className="header__logo"
          onClick={() => nav("/")}
        />

        <div className="header__search">
          <input type="text" placeholder="Search..." />
          <a>
            <LuSearch />
          </a>
        </div>

        <div className="header__actions">
          <button
            className="header__action-btn"
            title="Admin Login"
            onClick={() => setModal(true)}
          >
            <RiAdminLine />
          </button>

          <button
            className="header__action-btn"
            title="Basket"
            onClick={() => nav("/basket")}
          >
            <FaOpencart />
          </button>

          <div className="header__theme-toggle">
            <button onClick={() => dispatch({ type: "LIGHT" })}>
              <CiLight />
            </button>
            <button onClick={() => dispatch({ type: "MOON" })}>
              <RxMoon />
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div className="modal__content">
            <div className="modal__header">
              <h2>Admin Login</h2>
              <IoMdClose
                className="modal__close"
                onClick={() => setModal(false)}
              />
            </div>

            <div className="modal__body">
              <input
                type="text"
                placeholder="Name"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <div className="modal__password">
                <input
                  type={eye ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span onClick={() => setEye(!eye)}>
                  {eye ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              <button className="modal__submit" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
