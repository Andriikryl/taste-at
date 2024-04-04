import React from "react";
import styles from "./style.module.css";
import Container from "../container/Container";
import HistoryList from "./historyList/HistoryList";

export default function History() {
  return (
    <section className={styles.history}>
      <Container>
        <HistoryList />
      </Container>
    </section>
  );
}
