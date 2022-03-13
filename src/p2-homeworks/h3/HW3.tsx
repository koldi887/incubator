import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v4 as uuidv4} from 'uuid';

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
            <hr/>
            homeworks 3

            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
