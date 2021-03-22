import React from 'react';
import './InputChat.css';

const InputChat = ({getMeMessage, sendMessage}) => {
    return (
        <form
            onSubmit={(e) => sendMessage(e)}
            className='chatbot-chat-input-container'>
            <input
                placeholder='Escribi tu nombre'
                type='text'
                onChange={(e)=>getMeMessage(e.target.value)}
            />
            <button type='submit'/>
        </form>
    )
}


export default InputChat; 