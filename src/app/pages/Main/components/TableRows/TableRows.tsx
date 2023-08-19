import React from "react";
import styles from "./tableRows.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {INews} from "../../../../../services/interfaces/news";
import {useNewsStore} from "../../../../../store/store";

interface ActionsChecked {
    date: boolean,
    title: boolean,
    description: boolean
}

interface TableROwProps {
    visibleColumns: ActionsChecked,
    news: INews
}

export const TableRows = ({visibleColumns, news}: TableROwProps) => {
    const error = useNewsStore((state) => state.error);
    const navigate = useNavigate()
    if(error) {
        navigate('/404')
    }
    return (
        <>
            <div className={`${styles.row} ${styles.header}`}>
                {visibleColumns.date && <div className={`${styles.cell} ${styles['header-cell']}`}>Дата публикации</div>}
                {visibleColumns.title && <div className={`${styles.cell} ${styles['header-cell']}`}>Заголовок</div>}
                {visibleColumns.description && <div className={`${styles.cell} ${styles['header-cell']}`}>Описание</div>}
                <div className={`${styles.cell} ${styles['header-cell']}`}> </div>
            </div>
            {news.status !== 'ok' ? 'Loading...' : (
                <>
                    {news.articles.map((article, index) => (
                        <div className={styles.row} key={index}>
                            {visibleColumns.date && <div className={styles.cell}>{new Date(article.publishedAt).toLocaleDateString()}</div>}
                            {visibleColumns.title && <div className={styles.cell}>{article.title}</div>}
                            {visibleColumns.description && <div className={styles.cell}>{article.description}</div>}
                            <div className={styles.cell}><Link to={`/article/${article.source.id}`}>Читать далее</Link></div>
                        </div>
                    ))}
                </>
            )}

        </>
    )
}