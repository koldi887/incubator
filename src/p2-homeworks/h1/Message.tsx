import React from 'react'
import classes from './Message.module.css'

interface IMessageProps {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message: React.FC<IMessageProps> = ({avatar, name, message, time}) => {
    return (
        <div className={classes.messageContainer}>
            <img src={avatar} alt="avatar" className={classes.messageAvatar}/>
            <div className={classes.messageBubble}>
                <span className={classes.messageName}>{name}</span>
                <span className={classes.messageText}>{message}</span>
                <span className={classes.messageTime}>{time}</span>
            </div>
            <div className={classes.triangle}/>
        </div>
    )
}


