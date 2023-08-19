import React from "react";
import styles from './notFound.module.scss'
import {Link} from "react-router-dom";

export const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <div className={`${styles.notFound} ${styles.wrapper}`}>
                <p>404</p>
                <span>Упс что-то пошло не так</span>
                <Link to={'/'}>Вернуться на главную</Link>
            </div>
        </div>
    )
}