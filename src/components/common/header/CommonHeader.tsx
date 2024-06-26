import { Link } from "react-router-dom";
import styles from "./CommonHeader.module.scss";
function CommonHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.header__logoBox}>
                <img
                    src='/images/image-logo.png'
                    alt='logo'
                    className={styles.header__logoBox__logo}
                />
                <span className={styles.header__logoBox__title}>
                    PhotoSplash
                </span>
            </div>
            <div className={styles.header__profileBox}>
                <button className={styles.header__profileBox__button}>
                    사진제출
                </button>
                <button onClick={()=>location.href="/bookmark"} className={styles.header__profileBox__button}>
                    북마크
                </button>
                <span className={styles.header__profileBox__userName}>
                    devkgm | gm.kim333@gmail.com
                </span>
            </div>
        </header>
    );
}
export default CommonHeader;
