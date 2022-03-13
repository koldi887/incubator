import React from 'react';
import s from './Greeting.module.css';
import {Button, TextField} from "@material-ui/core";

type GreetingPropsType = {
    name: string
    setNameCallback: (value: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {

    const keyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }

    return (
        <div className={s.greetingContainer}>
            <div className={s.greetingBlock}>
                <TextField
                    error={!!error}
                    id="outlined-basic"
                    label={!!error ? 'Error' : 'Name'}
                    variant="outlined"
                    size={'small'}
                    value={name}
                    onChange={setNameCallback}
                    onKeyPress={keyPressHandler}
                />
                <Button
                    variant="contained"
                    size='small'
                    color='primary'
                    onClick={addUser}
                    disabled={!name}
                >
                    Add
                </Button>
                <span>{totalUsers}</span>
            </div>
            {!!error && <span className={s.error}>{error}</span>}
        </div>
    )
}

export default Greeting
