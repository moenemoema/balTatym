﻿import React from "react";
import s from "./Header.module.scss";
import logo from "../../../../Assets/logo.png";
import busket from "../../../../Assets/busket.png";
import registrImg from "../../../../Assets/registrAndAuth.png";
import languageImg from "../../../../Assets/language.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/registration");
  };

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/registration");
  };

  return (
    <>
      <div id="container">
        <div className={s.header}>
          <nav>
            <ul>
              <li>О нас</li>
              <li>Продукция</li>
              <li>Полезные статьи</li>
              <li>Контакты</li>
            </ul>
          </nav>
          <div className={s.busket}>
            <img src={busket} alt="busket" />
            {token ? (
              <span onClick={logout}>Logout</span>
            ) : (
              <img src={registrImg} alt="img" onClick={handleRegister} />
            )}
            {/* <img src={languageImg} alt="language" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
