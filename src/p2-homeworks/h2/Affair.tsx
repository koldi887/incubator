import React from 'react'
import classes from './Affairs.module.css'
import {AffairType} from "./HW2";
import {IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {ConfirmDelete} from "./ConfirmDelete";
import {useToggle} from "../hooks/useToggle";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (value: number) => void
}

export const Affair: React.FC<AffairPropsType> = ({affair, deleteAffairCallback}) => {
    const [deleteToggle, setDeleteToggle] = useToggle(false);

    const colorFilter = () => {
        switch (affair.priority) {
            case 'low':
                return 'green'
            case 'middle' :
                return 'orange'
            case 'high' :
                return 'red'
            default:
                return affair.priority
        }
    }

    const deleteCallback = (): void => {
        setDeleteToggle()
        deleteAffairCallback(affair._id)
    }

    if (deleteToggle) return <ConfirmDelete affair={affair} deleteCallback={deleteCallback}
                                            setDeleteToggle={setDeleteToggle}/>
    return (
        <div className={classes.affairBlock}>
            <span className={classes.affairName}>{affair.name}</span>
            <span className={classes.affairName} style={{color: colorFilter()}}>[ {affair.priority} ]</span>
            <IconButton aria-label="delete" size="medium" onClick={setDeleteToggle}>
                <DeleteIcon fontSize="inherit" color='error'/>
            </IconButton>
        </div>
    )
}

