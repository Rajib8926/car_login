import styles from "./Main.module.css";
function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.about}>
        <div className='textSection'>
          <div className={styles.textHead}>
            <p>LARGEST IMAGE SOURCE</p>
            <h1>
              POWERED BY CREATORS AROUND THE WORLD.
              <div className={styles.circleCon}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle2}></div>{" "}
              </div>
            </h1>
          </div>
          <div className={styles.textBottom}>
            <p className={styles.question}>Don't have account?</p>
            <p className={styles.ans}>Create account {">"}</p>
          </div>
        </div>
        <div className={styles.imgSection}>
          <p className={styles.aboutUsText}>About Us</p>
          <p className={styles.aboutUs}>
            Over <span className={styles.aboutBold}>3 million</span> free{" "}
            <span className={styles.aboutBold}>high-resolution</span> images
            brought to you by the world's most generous community of{" "}
            <span className={styles.aboutBold}>photographers.</span>
          </p>
        </div>
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.heaterLogin}>
          <p>LOTUS GT 430</p>
          <p>Best cars</p>
        </div>
        <div className={styles.loginCon}>
          <div className={styles.loginBox}>
            <p className={styles.loginHeading}>Login to your account</p>
            <p className={styles.uNam}>User name</p>
            <input type='text' className={styles.passUs} />
            <p className={styles.uNam}>Password</p>
            <input type='password' className={styles.passUs} />
            <div className={styles.remember}>
              <div className={styles.remind}>
                <input type='checkbox' />
                <label htmlFor=''>remember me</label>
              </div>
              <p>Forgot your password?</p>
            </div>
            <button className={styles.loginButton}>Login</button>
          </div>
          <div className={styles.loginBottom}></div>
        </div>
        <div className={styles.loginBottomButtons}>
          <p>01/05</p>
          <div className='bottomButtons'>
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
