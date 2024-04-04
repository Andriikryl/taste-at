import React from "react";
import Container from "../container/Container";
import styles from "./style.module.css";
import Link from "next/link";
import clsx from "clsx";
import { FaceBooke, Insta, Paint, Twitter } from "@/icons";

const navLinks = [
  {
    name: "Home",
    id: 1,
    href: "/",
  },
  {
    name: "About Us",
    id: 2,
    href: "/",
  },
  {
    name: "Our Menu",
    id: 3,
    href: "/",
  },
  {
    name: "Pages",
    id: 4,
    href: "/",
  },
  {
    name: "Blog",
    id: 5,
    href: "/",
  },
  {
    name: "Contact Us",
    id: 6,
    href: "/",
  },
];

const sosialLinks = [
  {
    id: 1,
    href: "/",
    svg: <Insta />,
    name: "instagram",
  },
  {
    id: 2,
    href: "/",
    svg: <Paint />,
    name: "paint",
  },
  {
    id: 3,
    href: "/",
    svg: <Twitter />,
    name: "Twitter",
  },
  {
    id: 4,
    href: "/",
    svg: <FaceBooke />,
    name: "facebook",
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.flex__group}>
          <nav className={styles.nav}>
            <ul
              role="list"
              className={clsx(styles.nav__list, styles.nav__flow)}
            >
              {navLinks.map((item) => {
                return (
                  <li key={item.id} className={styles.list__item}>
                    <Link href={item.href} className={styles.item__link}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ul
            role="list"
            className={clsx(styles.social__list, styles.social__flow)}
          >
            {sosialLinks.map((item) => {
              return (
                <li key={item.id} className={styles.social__itel}>
                  <Link href={item.href} className={styles.social__link}>
                    {item.svg}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </header>
  );
}
