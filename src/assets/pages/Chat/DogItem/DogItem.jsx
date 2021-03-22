import React from 'react';
import './DogItem.css'
import dogAvatar from '../../../fonts/dog.PNG'

const DogItem = ({ text }) => {

    return (
        <div className='dog-item-container'>
            <img src={dogAvatar} alt='perrito' />
            <div className='dog-item-messages'>
                <label>{ text}</label>
            </div>
            
        </div>
    )

}

export default DogItem;