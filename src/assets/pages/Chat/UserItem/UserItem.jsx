import React from 'react';
import './UserItem.css';
import MonoUser from '../../../fonts/monoUser.png'
import Fade from "react-reveal/Fade";

const UserItem = ({text}) => {
    return (
        <div className='user-item-container'>
            <div className='user-item-message'>
                <Fade>
                    <label> {text}</label> 
                 </Fade>  
                
            </div>
           <img src={MonoUser} alt='monito-user'/> 
        </div>
    )
}
export default UserItem;