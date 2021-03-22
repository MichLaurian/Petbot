import React, {useState} from 'react';
import './Chat.css';
import DogItem from './DogItem/DogItem';
import UserItem from './UserItem/UserItem';
import InputChat from './InputChat/InputChat';

const Chat = () => {
    let idCounter = 0;

        const [msg, setMsg] = useState({});

        const [chat, setChat] = useState([
        {
            id:0,
            emmiter: 'Dog',
            msg: ['hola', 'como estas?']
        }
        ]);
    
    function getMeMessage(value) {
        idCounter = idCounter + 1;
        setMsg({
            id: idCounter,
            emmiter: 'User',
            msg: value
        })
    };

    function sendMessage(e) {
        e.preventDefault();
        // hace un push y conservalos objetos anterires
        setChat([
            ...chat, msg ])
    }

    // console.log('chat:', chat)
    // console.log('msg:', msg)

    return (
        <div className='chatbot-chat-container'>
            <div className='chatbot-chat-content'>
                <div className='chatbot-chat'>
                    <div className='chatbot-chat-container-body'>
                        {/* iteramos el array en el cuperpo delcomponente */}

                        {chat.map((message, index) => message.emmiter === 'Dog' ?
                            <DogItem
                                key={index}
                                text={message.msg} />
                            :
                            <UserItem
                            key={index}
                            text={message.msg}/>
                        )}
                        
                        
                    </div>
                    {/* chat de inputchat */}
                    <div className='chatbot-chat-container-input'></div>
                    <InputChat
                        getMeMessage={getMeMessage}
                        sendMessage={sendMessage}
                        />
                </div>
            </div>
        </div>
    )
}

export default Chat; 