import React from 'react'
import { Message } from "./Message";
import { TaskWrapper } from "../../wrapper/index.js";


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Dmitri K.',
    message: 'some text dsd  dsfsdf aasdn asdasd asdasd',
    time: '22:00',
}

const HW1 = () => {
    return (
        <>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </>
    )
}

export default TaskWrapper(HW1, 1)
