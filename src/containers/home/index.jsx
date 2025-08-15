import React from "react";
import {useNavigate} from 'react-router-dom';
import {Animante} from 'react-simple-animate';
import './style.scss';

const Home=() => {

    const navigate = useNavigate();

    const handleNavigateToContactMePage=() => {
        navigate('/contact');
    };

    return(
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Francisco Júnior
                    <br/>
                    Front end developer
                </h1>
            </div>

            <Animante
            play
            duration={1.5}
            delay={1}
            start={{
                transform : "translateY(550px)",
            }}

            end={{
                transform : "translatex(0px)",
            }}
            
            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMePage}>Hire Me</button>
                </div>
            </Animante>
        </section>
    )
}

export default Home;