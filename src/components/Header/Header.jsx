import React, {useState} from "react";
import { Link } from "react-router-dom"; // Импорт Link из react-router-dom
import "./Header.css";

function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="main">
      <div className="header">
        <header className="page_header">
          <div className="icon">
            <a className="link" href="/ru/">
              <span className="first">УЛУУ </span>
              <span className="second">ТОО</span>
            </a>
          </div>
          <nav className="item_nav">
            <div className="nav">
              <Link to="/about" className="menu_item">
                Информация
              </Link>
            </div>
            <div className="nav">
              <Link to="/branches" className="menu_item">
                Филиалы
              </Link>{" "}
              {/* Используем Link */}
            </div>
            <div className="nav">
              <Link to="/menu" className="menu_item">
                Меню
              </Link>
            </div>
            <div className="nav">
              <Link to="/discounts" className="menu_item">
                Акции и скидки
              </Link>
            </div>
            <div className="nav">
              <Link to="/contacts" className="menu_item">
                Контакты
              </Link>
            </div>
            <div className="auth">
            {isLoggedIn ? (
              <span>
                <Link to="/dashboard">
                  <button className="dashboardButton">Личный кабинет</button>
                </Link>
              </span>
            ) : (
              <span>
                <Link to="/register">
                  <button className="registerHeader">Регистрация</button>
                </Link>
                <Link to="/login">
                  <button className="loginHeader">
                    Логин
                  </button>
                </Link>
              </span>
            )}
          </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
