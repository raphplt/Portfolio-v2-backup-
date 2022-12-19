import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.mainChild}>
        <div className={styles.title}>
          <h1>
            <Link href={"/"}>Raphaël Plassart Portfolio </Link>
          </h1>
        </div>
      </div>
      <div className={styles.mainChild}>
        <div className={styles.navBar}>
          <div className={styles.navBarChild}>
            <Link href={"/"}>Home</Link>
          </div>
          <div className={styles.navBarChild}>
            <Link href={"./projets"}>Projets</Link>
          </div>
          <div className={styles.navBarChild}>
            <Link href={"./qui-suis-je"}>Qui suis-je?</Link>
          </div>
          <div className={styles.navBarChild}>
            <Link href={"./contacts"}>Contacts</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
