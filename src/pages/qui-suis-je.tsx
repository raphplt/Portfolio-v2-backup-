import Header from "../componants/header";
import styles from "../styles/quisuisje.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <h1>Qui suis-je ?</h1>
    </div>
  );
}
