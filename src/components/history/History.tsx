import React from "react";
import styles from "./style.module.css";
import Container from "../container/Container";
import HistoryList from "./historyList/HistoryList";
import Image from "next/image";

export default function History() {
  return (
    <section className={styles.history}>
      <Container>
        <HistoryList />
        <div className={styles.flex__group}>
          <div>
            <Image
              src="/history/history.jpg"
              width={743}
              height={513}
              alt="restarun"
            />
          </div>
          <div className={styles.history__info}>
            <h2 className={styles.info__title}>The Delicious Story</h2>
            <p className={styles.info__description}>
              The people, food and the prime locations make the perfect place
              for the friends & family to come together and have great time.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
