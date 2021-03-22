import React from 'react';
import './UserItem.css';
import MonoUser from '../../../fonts/monoUser.png'

const UserItem = ({text}) => {
    return (
        <div className='user-item-container'>
            <div className='user-item-message'>
                 <label> {text}</label>   
                
            </div>
           <img src={MonoUser} alt='monito-user'/> 
        </div>
    )
}

export default UserItem;