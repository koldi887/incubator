import React from 'react'
import classes from './Affairs.module.css'
import {AffairType, FilterType} from './HW2'
import {Affair} from "./Affair";
import {Button} from "@material-ui/core";

type AffairsPropsType = {
    data: AffairType[],
    setFilter: (value: FilterType) => void,
    deleteAffairCallback: (value: number) => void
}

const Affairs: React.FC<AffairsPropsType> = ({data, setFilter, deleteAffairCallback}) => {
    const filterButtons = ['all', 'high', 'middle', 'low']
    const mappedAffairs = data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))
    const mappedFilterButtons = filterButtons.map((item, index) => (
        <Button key={index} variant="contained" size='small' color='primary'
                onClick={() => setFilterHandler(item)}>{item}</Button>
    ))

    const setFilterHandler = (value: string) => {
        setFilter(value as FilterType)
    }
    return (
        <div className={classes.affairsContainer}>
            {mappedAffairs}

            <div className={classes.filterButtonsBlock}>
                {mappedFilterButtons}
            </div>
        </div>
    )
}

export default Affairs
