import styles from "./UnknownPage.module.scss";

const UnknownPage = () => {
  return (
    <section className={styles["bg-purple"]}>
      <div className={styles.stars}>
        <div className={styles["custom-navbar"]}>
          <div className={styles["brand-logo"]}>
            <img src="http://salehriaz.com/404Page/img/logo.svg" width="80px" />
          </div>
          <div className={styles["navbar-links"]}>
            <ul>
              <li>
                <a href="http://salehriaz.com/404Page/404.html" target="_blank">
                  Home
                </a>
              </li>
              <li>
                <a href="http://salehriaz.com/404Page/404.html" target="_blank">
                  About
                </a>
              </li>
              <li>
                <a href="http://salehriaz.com/404Page/404.html" target="_blank">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="http://salehriaz.com/404Page/404.html"
                  className={styles["btn-request"]}
                  target="_blank"
                >
                  Request A Demo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["central-body"]}>
          <img
            className={styles["image-404"]}
            src="http://salehriaz.com/404Page/img/404.svg"
            width="300px"
          />
          <a
            href="http://salehriaz.com/404Page/404.html"
            className={styles["btn-go-home"]}
            target="_blank"
          >
            GO BACK HOME
          </a>
        </div>
        <div className={styles.objects}>
          <img
            className={styles["object_rocket"]}
            src="http://salehriaz.com/404Page/img/rocket.svg"
            width="40px"
          />
          <div className={styles["earth-moon"]}>
            <img
              className={styles["object_earth"]}
              src="http://salehriaz.com/404Page/img/earth.svg"
              width="100px"
            />
            <img
              className={styles["object_moon"]}
              src="http://salehriaz.com/404Page/img/moon.svg"
              width="80px"
            />
          </div>
          <div className={styles["box_astronaut"]}>
            <img
              className="object_astronaut"
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              width="140px"
            />
          </div>
        </div>
        <div className={styles["glowing_stars"]}>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
        </div>
      </div>
    </section>
  );
};

export default UnknownPage;
