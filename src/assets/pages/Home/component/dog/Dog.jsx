import React from 'react';
import Lottie from 'react-lottie';
import animationData from './dog-data.json';

import './Dog.css';

const Dog = ({history }) => {
    
    const defaultOption = {
        loop: true,
        autoplay: true,
        animationData: animationData,

    };

    function hadleonClick() {
        history.push('/chat')
    }

    return (
        <div
            onClick={hadleonClick}
            className='dog-container'>
            <Lottie
                options={defaultOption}
            />
            {/* <label>Hola!</label>
            <label>¿Que necesitas saber?</label> */}
            </div>
        )

}
        
export default Dog;
