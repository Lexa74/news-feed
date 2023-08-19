import React, {useEffect, useState} from "react";
import styles from './main.module.scss'
import {useNewsStore} from "../../../store/store";
import {INews} from "../../../services/interfaces/news";
import {TableActions} from "./components/TableActions/TableActions";
import {TableRows} from "./components/TableRows/TableRows";

export const Main = () => {
    const [visibleColumns, setVisibleColumns] = useState({
        date: true,
        title: true,
        description: true,
    });

    const news: INews = useNewsStore((state) => state.news);
    const fetchNews = useNewsStore((state) => state.fetchNews);

    useEffect(() => {
        fetchNews()
    }, []);

    return (
        <>
            <TableActions onChecked={setVisibleColumns} valueChecked={visibleColumns} />
            <div className={styles.table}>
                <TableRows visibleColumns={visibleColumns} news={news} />
            </div>
        </>
    );
}