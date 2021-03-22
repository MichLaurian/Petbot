import React from 'react';
import Dog from './component/dog/Dog';
import './Home.css';
import Fade from 'react-reveal/Fade'


const Home = ({ history }) => {
    return (

        <div className='home-dotbot-container'>
            <div className='home-dogbot-content'>
                <Dog history={history} />
                <div className='home-dogbot-greeeting'>
                    
                    <Fade opposite>
                        <h1>Hola Humano</h1>
                    </Fade>
                    
                    <Fade opposite>
                        <label>¿Queres charlar?</label>
                        <label>Click sobre mi para comenzar</label>
                    </Fade>
                    
                </div>
            </div>
        </div>
    )
};
export default Home;
