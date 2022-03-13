import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v4 as uuidv4} from 'uuid';
import { TaskWrapper } from "../../wrapper/index.js";

export type UserType = {
    _id: string
    name: string
}

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        const newUser = {name: name, _id: uuidv4()}
        setUsers([...users, newUser])
    }

    return (
        <div>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )
}

export default TaskWrapper(HW3,3)
