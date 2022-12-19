import Header from "../componants/header";
import styles from "../styles/projets.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <h1>Projets</h1>
    </div>
  );
}
