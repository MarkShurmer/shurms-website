import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/real-weather" className={styles.link}>
          Real weather
        </Link>
      </div>
    </header>
  );
}

export default Header;
