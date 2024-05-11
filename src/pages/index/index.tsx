import CommonHeader from "@/components/common/header/CommonHeader";
import styles from "./styles/index.module.scss";
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar";

function index() {
    return (
        <div className={styles.page}>
            <CommonHeader />
            {/* 공통 네비게이션 UI 부분 */}
            <div className={styles.page__contents}>
                <div className={styles.page__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}>
                            PhotoSplash
                        </span>
                        <span className={styles.wrapper__desc}>
                            인터넷의 시작 자료 출저입니다. <br />
                            모든 지역에 있는 크리에이터들의 지원을 받습니다.
                        </span>
                        <CommonSearchBar />
                    </div>
                </div>
                <div className={styles.page__contents__imageBox}></div>
            </div>
        </div>
    );
}

export default index;
