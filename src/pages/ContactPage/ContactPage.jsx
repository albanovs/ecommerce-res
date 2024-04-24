import React from "react";
import styles from "./ContactPage.module.scss";

export function ContactPage() {
  const contacts = [
    { address: "31b ул. Байтик баатыра", phone: "0779 000 084" },
    { address: "32b ул. Байтик баатыра", phone: "0779 000 085" },
    { address: "32b ул. Байтик баатыра", phone: "0779 000 085" },
    { address: "32b ул. Байтик баатыра", phone: "0779 000 085" },
    { address: "32b ул. Байтик баатыра", phone: "0779 000 085" },
    { address: "32b ул. Байтик баатыра", phone: "0779 000 085" },
    { address: "32b ул. Байтик баатыра", phone: "0779 000 085" },
    { address: "32b ул. Байтик баатыра", phone: "0779 000 085" },
    // Добавьте больше контактов по мере необходимости
  ];

  return (
    <div className={styles.mainContact}>
      <div className={styles.adressContacts}>
        <h2>Адреса и контакты</h2>
      </div>
      <div className={styles.details}>
        {contacts.map((contact, index) => (
          <div className={styles.detail} key={index}>
            <p>{contact.address}</p>
            <strong>
              <span>{contact.phone}</span>
            </strong>
          </div>
        ))}
      </div>
      <div className={styles.reviews}>
        <h2>Отзывы и предложения</h2>
        <p>+996 (551) 50 50 50</p>
        <p>chaihana.uluutoo@gmail.com</p>
      </div>
      <div className={styles.card}>
        <span className={styles.title}>Вы можете получить любую интересующую Вас информацию по телефону или написав нам на e-mail, а также заполнив форму обратной связи.</span>
        <form className={styles.formEmail}>
          <div className={styles.group}>
            <input placeholder="" type="text" required="" />
            <label htmlFor="name">Ваше имя</label>
          </div>
          <div className={styles.group}>
            <input placeholder="" type="email" id="email" name="email" required="" />
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles.group}>
            <textarea placeholder="" id="comment" name="comment" rows="5" required=""></textarea>
            <label htmlFor="comment"></label>
          </div>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}

