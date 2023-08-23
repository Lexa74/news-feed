import React, {useState} from "react";
import {useNewsStore} from "../../../../../store/store";
import styles from './filterPanel.module.scss'
import {Input} from "../../../../../UI/components/Input/Input";
import {Button} from "../../../../../UI/components/Button/Button";
import {useNavigate} from "react-router-dom";

export const FilterPanel = () => {
    const [searchValue, setSearchValue] = useState('')
    const [filterButtonActive, setFilterButtonActive] = useState({
        byOld: false,
        byNew: false
    });
    const filterByDate = useNewsStore((state) => state.filterByDate);
    const searchByTitle = useNewsStore((state) => state.searchByTitle);
    const error = useNewsStore((state) => state.error);
    const navigate = useNavigate()
    if(error) {
        navigate('/404')
    }

    const onFilterByDate = (direction: string) => {
        filterByDate(direction)
        if(direction === 'asc') {
            setFilterButtonActive(prev => ({...prev, byOld: !filterButtonActive.byOld}))
            setFilterButtonActive(prev => ({...prev, byNew: false}))
        }
        if(direction === 'desc') {
            setFilterButtonActive(prev => ({...prev, byNew: !filterButtonActive.byNew}))
            setFilterButtonActive(prev => ({...prev, byOld: false}))
        }
    }

    return (
        <>
            <div className={styles.filterPanel}>
                <p className={`${styles.filterPanel} ${styles.caption} `}>Панель фильтрации:</p>
                <div className={`${styles.filterPanel} ${styles.wrapper}`}>
                    <div className={`${styles.filterPanel} ${styles.buttons}`}>
                        <Button className={filterButtonActive.byOld ? 'active' : ''} onClick={() => onFilterByDate('asc')} variant={'light'}>Самые старые</Button>
                        <Button className={filterButtonActive.byNew ? 'active' : ''} onClick={() => onFilterByDate('desc')} variant={'light'}>Самые новые</Button>
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