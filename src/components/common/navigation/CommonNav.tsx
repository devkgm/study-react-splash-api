import { useEffect, useState } from "react";
import styles from "./CommonNav.module.scss";
import navJson from "./nav.json";
import { useRecoilState, useSetRecoilState } from "recoil";
import { pageState, searchState } from "@/recoil/atoms/pager";
import { Link, useLocation } from "react-router-dom";

interface Navigation {
    index: number;
    path: string;
    label: string;
    searchValue: string;
    isActive: boolean;
}

function CommonNav() {
    const location = useLocation();
    const [navigation, setNavigation] = useState<Navigation[]>(navJson);
    const [page, setPage] = useRecoilState(pageState);
    const [search, setSearch] = useRecoilState(searchState);

    useEffect(() => {
        navigation.forEach((nav: Navigation) => {
            nav.isActive = false;

            if (
                nav.path === location.pathname ||
                location.pathname.includes(nav.path)
            ) {
                console.log(nav.searchValue);
                nav.isActive = true;
                setSearch(nav.searchValue);
                setPage(1);
            }
        });
        setNavigation([...navigation]);
    }, [location.pathname]);

    const navLinks = navigation.map((item: Navigation) => {
        return (
            <Link
                to={item.path}
                className={
                    item.isActive
                        ? `${styles.navigation__menu} ${styles.active}`
                        : `${styles.navigation__menu} ${styles.inactive}`
                }
                key={item.index}
            >
                <span className={styles.navigation__menu__label}>
                    {item.label}
                </span>
            </Link>
        );
    });

    return <nav className={styles.navigation}>{navLinks}</nav>;
}

export default CommonNav;
