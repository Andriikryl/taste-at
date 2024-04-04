import React from "react";
import { Hours, Local, Reservation } from "@/icons";
import styles from "./style.module.css";
import clsx from "clsx";

const listData = [
  {
    id: 1,
    title: "Locate Us",
    description: "Riverside 25, San Diego, California",
    svg: <Local />,
  },
  {
    id: 2,
    title: "Open Hours",
    description: "Mon To Fri 9:00 AM - 9:00 PM",
    svg: <Hours />,
  },
  {
    id: 3,
    title: "Reservation",
    description: "restaurantate@gmail.com",
    svg: <Reservation />,
  },
];

export default function HistoryList() {
  return (
    <ul className={clsx(styles.list, styles.flow)}>
      {listData.map((item) => {
        return (
          <li key={item.id} className={styles.card}>
            <div className={styles.image__box}>{item.svg}</div>
            <div className={styles.card__info}>
              <h3 className={styles.card__title}>{item.title}</h3>
              <p className={styles.card__description}>{item.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
