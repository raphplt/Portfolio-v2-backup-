import Header from "../componants/header";
import styles from "../styles/contacts.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <h1>Contacts</h1>
    </div>
  );
}
