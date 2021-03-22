import React, {useState} from 'react';
import './Chat.css';
import DogItem from './DogItem/DogItem';
import UserItem from './UserItem/UserItem';
import InputChat from './InputChat/InputChat';

const Chat = () => {
        const [msg, setMsg] = useState({});

        const [chat, setChat] = useState([
        {
            id:0,
            emiter: 'Dog',
            msg: ['hola', 'como estas?']
        }
    ]);
    return (
        <div className='chatbot-chat-container'>
            <div className='chatbot-chat-content'>
                <div className='chatbot-chat'>
                    <div className='chatbot-chat-container-body'>
                        {chat.map((menssage, index) => 03
                        )}
                        <DogItem text='hola que tal'/>
                        <UserItem text='todo bien, encerrada'/>
                    </div>
                    {/* chat de inputchat */}
                    <div className='chatbot-chat-container-input'></div>
                        <InputChat/>
                </div>
            </div>
        </div>
    )
}

export default Chat; 