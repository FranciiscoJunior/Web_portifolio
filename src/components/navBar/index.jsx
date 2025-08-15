import React, { useState } from "react";
import {FaBars, FaReact} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import './style.scss';

const data = [
    {
        babel: 'HOME',
        to: '/'
    },
        {
        babel: 'ABOUT-ME',
        to: '/about'
    },
        {
        babel: 'SKILS',
        to: '/skils'
    },
        {
        babel: 'RESUME',
        to: '/resume'
    },
    {
        babel: 'PORTIFÓLIO',
        to: '/portifolio'
    },
    {
        babel: 'CONTACT',
        to: '/contact'
    }
]

const NavBar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    return (
        <div>
            <div className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                        <FaReact size={30}/>
                    </Link>
                </div>

                <ul className= {`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
                    {
                        data.map((item, key)=> (
                            <li key={key} className="navbar__container__menu__item">
                                <Link className="navbar__container__menu__item__links" to={item.to}>
                                    {item.babel}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <div className="nav-icon" onClick={handleToggleIcon}>
                    { toggleIcon ? <HiX size={30} /> : <FaBars size={30}/> }
                </div>
            </div>
        </div>
    )
}

export default NavBar;