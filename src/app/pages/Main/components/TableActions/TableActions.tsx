import React from "react";
import styles from "./tableActions.module.scss";
import {FilterPanel} from "../FilterPanel/FilterPanel";

interface ActionsChecked {
    date: boolean,
    title: boolean,
    description: boolean
}

interface TableActionsInputs {
    onChecked: (p: (prev: ActionsChecked) => ActionsChecked) => void,
}
interface TableActionsOutputs {
    valueChecked: ActionsChecked
}

type TableActionsProps = TableActionsInputs & TableActionsOutputs

export const TableActions = ({onChecked, valueChecked}: TableActionsProps) => {
    return (
        <div className={styles.actions}>
            <div className={`${styles.actions} ${styles.caption}`}>Управление колонками:</div>
            <div className={`${styles.actions} ${styles.checkboxes}`}>
                <label>
                    Дата публикации
                    <input
                        type="checkbox"
                        checked={valueChecked.date}
                        onChange={() => onChecked((prev) => ({ ...prev, date: !prev.date }))}
                    />
                </label>
                <label>
                    Заголовок
                    <input
                        type="checkbox"
                        checked={valueChecked.title}
                        onChange={() => onChecked((prev) => ({...prev, title: !prev.title}))}
                    />
                </label>
                <label>
                    Описание
                    <input
                        type="checkbox"
                        checked={valueChecked.description}
                        onChange={() => onChecked((prev) => ({...prev, description: !prev.description}))}
                    />
                </label>
            </div>
            <FilterPanel/>
        </div>
    )
}