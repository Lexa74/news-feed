import React, {useState} from "react";
import {useNewsStore} from "../../../../../store/store";
import styles from './filterPanel.module.scss'
import {Input} from "../../../../../UI/components/Input/Input";
import {Button} from "../../../../../UI/components/Button/Button";
import {useNavigate} from "react-router-dom";

export const FilterPanel = () => {
    const [searchValue, setSearchValue] = useState('')
    const filterByDate = useNewsStore((state) => state.filterByDate);
    const searchByTitle = useNewsStore((state) => state.searchByTitle);
    const error = useNewsStore((state) => state.error);
    const navigate = useNavigate()
    if(error) {
        navigate('/404')
    }

    return (
        <>
            <div className={styles.filterPanel}>
                <p className={`${styles.filterPanel} ${styles.caption} `}>Панель фильтрации:</p>
                <div className={`${styles.filterPanel} ${styles.wrapper}`}>
                    <div className={`${styles.filterPanel} ${styles.buttons}`}>
                        <Button onClick={() => filterByDate('asc')} variant={'light'}>Самые старые</Button>
                        <Button onClick={() => filterByDate('desc')} variant={'light'}>Самые новые</Button>
                    </div>
                    <div>
                        <Input
                            onChange={(e) => {
                                searchByTitle(e.target.value)
                                setSearchValue(e.target.value)
                            }}
                            value={searchValue}
                            placeholder={'Поиск по заголовкам'}/>
                    </div>
                </div>
            </div>
        </>
    )
}