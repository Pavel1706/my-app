import React from 'react'
import style from './Message.module.css'


type messageData = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageData) {

    return (

        <div className={style.all}>
            <div className={style.avatar}>
                <img src={props.avatar} alt='avatar'/>
            </div>
            <div className={style.shape}></div>
            <div className={style.message}>
                <div className={style.name}>{props.name}</div>
                <div className={style.text}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
