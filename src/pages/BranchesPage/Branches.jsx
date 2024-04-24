import React from "react";
import styles from "./Branches.module.scss";
import Fhoto from "../../img/Screenshot_20200831-201700_Instagram.jpg";
import { Link } from "react-router-dom";

const branches = [
  { id: '1', name: 'Branch 1', address: '31b ул. Байтик баатыра' },
  { id: '2', name: 'Branch 2', address: '32b ул. Байтик баатыра' },
  { id: '3', name: 'Branch 3', address: '32b ул. Байтик баатыра' },
  { id: '4', name: 'Branch 4', address: '32b ул. Байтик баатыра' },
  { id: '5', name: 'Branch 5', address: '32b ул. Байтик баатыра' },
  { id: '6', name: 'Branch 6', address: '32b ул. Байтик баатыра' },
  // Добавьте больше веток по мере необходимости
];

export function Branches() {
  return (
    <div className={styles.mainBraches}>
      <div className={styles.branches}>
        {branches.map(branch => (
          <Link to={`/branches/${branch.id}`} key={branch.id}>
            <div className={styles.branch}>
              <div className={styles.infoBranch}>
                <img src={Fhoto} alt="photo" />
                <p>{branch.address}</p>
                <button>Посмотреть</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
);

}