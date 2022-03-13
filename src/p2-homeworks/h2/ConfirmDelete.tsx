import React from 'react';
import classes from './Affairs.module.css'
import {AffairType} from "./HW2";
import {Button} from "@material-ui/core";
import {LoadingBar} from "./LoadingBar";
import {useToggle} from "../hooks/useToggle";

type ConfirmDeletePropsType = {
    affair: AffairType
    deleteCallback: () => void
    setDeleteToggle: () => void
}

export const ConfirmDelete: React.FC<ConfirmDeletePropsType> = (props) => {
    const [progressToggle, setProgressToggle] = useToggle(false);

    if (progressToggle) return <LoadingBar deleteCallback={props.deleteCallback}/>
    return (
        <div className={classes.confirmDeleteContainer}>
            <span>Your really want to delete <b>"{props.affair.name}"</b> ?</span>
            <div>
                <Button
                    variant="contained"
                    size='small'
                    color='primary'
                    onClick={setProgressToggle}
                >
                    Delete
                </Button>

                <Button
                    variant="outlined"
                    size='small'
                    color='primary'
                    onClick={props.setDeleteToggle}
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
}

