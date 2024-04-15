import React from "react";
import "./Branch.css";
import Navig from "../../img/navig.svg";
import Chasy from "../../img/chasy.svg";
import WhatsApp from "../../img/whatsapp_2.png";
import SimpleSlider from "../../components/Slider/Slider";
import { useParams } from "react-router-dom";

function Branch() {
  const { id } = useParams();

  return (
    <div className="mainBrach">
      <div className="slider">
        <SimpleSlider />
      </div>
      <div className="infoBranch">
        <div className="nameBranch">
          <h2>УЛУУ ТОО</h2>
        </div>
        <div className="commentBranch">3 МКР</div>
        <div className="detailInfo">
          <img src={Navig} alt="" /> <span>31b ул. Байтик баатыра</span>
        </div>
        <div className="detailInfo">
          <img src={Chasy} alt="" />
          <span>09:00–00:00</span>
        </div>
        <div className="detailInfo">
          <img src={WhatsApp} alt="" />
          <span>0779 000 084</span>
        </div>
        <div className="bron">
        <a href="tel:0779 000 084">Позвонить</a>
        </div>
      </div>
    </div>
  );
}

export default Branch;
