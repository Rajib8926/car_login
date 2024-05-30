import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.itemAndSearch}>
        <ul>
          <li className={styles.unActive}>PIXLS</li>
          <li className={styles.active}>Home</li>
          <li className={styles.unActive}>Get started</li>
          <li className={styles.unActive}>About</li>
          <li className={styles.unActive}>Forum</li>
          <li>
            <input className={styles.inputSearch} type='text' placeholder='Search'/>
          </li>
        </ul>
      </div>
      <div className={styles.login}>
        <button className={styles.button}>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
