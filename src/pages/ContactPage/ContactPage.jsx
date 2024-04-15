import React from "react";
import "./ContactPage.css";

function ContactPage() {
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
    <div className="mainContact">
      <div className="adressContacts">
        <h2>Адреса и контакты</h2>
      </div>
      <div className="details">
        {contacts.map((contact, index) => (
          <div className="detail" key={index}>
            <p>{contact.address}</p>
            <strong>
              <span>{contact.phone}</span>
            </strong>
          </div>
        ))}
      </div>
      <div className="reviews">
        <h2>Отзывы и предложения</h2>
        <p>+996 (551) 50 50 50</p>
        <p>chaihana.uluutoo@gmail.com</p>
      </div>
      <div class="card">
  <span class="title">Вы можете получить любую интерисующую Вас информацию по телефону или написав нам на e-mail, а так же заполнив форму обратной связи.</span>
  <form class="formEmail">
    <div class="group">
    <input placeholder="" type="text" required="" />
    <label for="name">Ваше имя</label>
    </div>
<div class="group">
    <input placeholder="" type="email" id="email" name="email" required="" />
    <label for="email">Email</label>
    </div>
<div class="group">
    <textarea placeholder="" id="comment" name="comment" rows="5" required=""></textarea>
    <label for="comment"></label>
</div>
    <button type="submit">Отправить</button>
  </form>
</div>

    </div>
  );
}

export default ContactPage;
