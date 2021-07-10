import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const AppBar = () => {
    return (
      <header className={styles.appbar}>
        <div className={styles.brand}>
          <img src='/images/logo_full.png' alt='Remax Logo' />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navMenu}>
            <Link href={'/'}><li className={styles.navMenuItem}>Home</li></Link>
            {/* <li className={styles.navMenuItem}>Virtual Tours</li>
            <li className={styles.navMenuItem}>Statistics</li>
            <li className={styles.navMenuItem}>Movers</li> */}
            <li className={styles.navMenuItem}>About</li>
            <li className={styles.navMenuItem}>Contact</li>
          </ul>
        </nav>
        <div className={styles.account}></div>
      </header>
    );
}

export default AppBar;