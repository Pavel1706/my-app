import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://vraki.net/sites/default/files/inline/images/1_42.jpg',
    name: 'Pavel',
    message: 'Hello',
    time: '19:00',
}

function HW1() {
    return (
        <div>
            <hr/>


            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


            <hr/>

            <hr/>
        </div>
    )
}

export default HW1
