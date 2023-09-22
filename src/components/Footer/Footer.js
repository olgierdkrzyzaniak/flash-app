import React from "react";
import Link from "next/link";

import Logo from "@/components/Logo";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <Logo mobileAlignment="center" />
          <p className={styles.attribution}>
            Flash card app created by <a href="">Olgierd Krzyżaniak</a>. Enjoy
            it!{" "}
          </p>
        </div>
        <nav>
          <h2 className={styles.linkHeading}>Links</h2>
          <ul className={styles.linkList}>
            <li>
              <Link href="/todo">Terms of Use</Link>
            </li>
            <li>
              <Link href="/todo">Privacy Policy</Link>
            </li>
            <li>
              <a href="/todo">Twitter</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
