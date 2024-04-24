import React from "react";
import { Link } from "react-router-dom"; // Импорт Link из react-router-dom
import styles from "./Header.module.scss";

export function Header() {

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <header className={styles.page_header}>
          <div className={styles.icon}>
            <a className={styles.link} href="/ru/">
              <span className={styles.first}>УЛУУ </span>
              <span className={styles.second}>ТОО</span>
            </a>
          </div>
          <nav className={styles.item_nav}>
            <div className={styles.nav}>
              <Link to="/about" className={styles.menu_item}>
                Информация
              </Link>
            </div>
            <div className={styles.nav}>
              <Link to="/branches" className={styles.menu_item}>
                Филиалы
              </Link>{" "}
              {/* Используем Link */}
            </div>
            <div className={styles.nav}>
              <Link to="/menu" className={styles.menu_item}>
                Меню
              </Link>
            </div>
            <div className={styles.nav}>
              <Link to="/discounts" className={styles.menu_item}>
                Акции и скидки
              </Link>
            </div>
            <div className={styles.nav}>
              <Link to="/contacts" className={styles.menu_item}>
                Контакты
              </Link>
            </div>
            <div className={styles.auth}>
              <span>
                <Link to="/register">
                  <button className={styles.registerHeader}>Регистрация</button>
                </Link>
                <Link to="/login">
                  <button className={styles.loginHeader}>
                    Логин
                  </button>
                </Link>
              </span>
          </div>
          </nav>
        </header>
      </div>
    </div>
  );

  
}


