import React from "react";
import styles from "./style.module.css";
import Container from "../container/Container";
import { Button } from "../button/Button";
import Image from "next/image";
import clsx from "clsx";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.flex__group}>
          <div className={clsx(styles.hero__info, styles.info__flow)}>
            <h1 className={styles.title}>Welcome to Restaurant</h1>
            <p className={styles.description}>
              The people, food and the prime locations make the perfect place
              good friends & family to come together and have great time.
            </p>
            <Button>View Menu</Button>
          </div>
          <div>
            <Image src="/hero/hero.png" width={655} height={769} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}
