import React, { useState } from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderConter";
import ImageOne from "../../image/Auto_motors.png";
import ImageTwo from "../../image/cardapio_online.png";
import ImageThree from "../../image/sportify_web.png";
import ImageFour from "../../image/visions.png";
import ImageFive from "../../image/cardapio_online.png";
import "./style.scss";

const portifolioData = [
    {
        id: 1,
        name: "Ecommerce",
        image : ImageOne,
        link : ''
    },
    {
        id: 2,
        name: "Ecommerce",
        image : ImageTwo,
        link : ''
    },
    {
        id: 3,
        name: "Ecommerce",
        image : ImageThree,
        link : ''
    },
    {
        id: 4,
        name: "Ecommerce",
        image : ImageFour,
        link : ''
    },
    {
        id: 5,
        name: "Ecommerce",
        image : ImageFive,
        link : ''
    },
]

const filterData = [
    {
        filterId : 1,
        label : 'all'
    },
    {
        filterId : 2,
        label : 'Development Web'
    },
    {
        filterId : 3,
        label : 'Design'
    },
]

const Portifolio=() => {

    const [filteredvalue, setFilteredValue] = useState(1)
    const [hoveredValue, setHoveredValue] = useState(null)

    function handleFilter(currentId) {
        setFilteredValue(currentId)
    };

    function handleHover(index){
        setHoveredValue(index)
    }

    const filteredItems = filteredvalue === 1 ? portifolioData :
    portifolioData.filter(item=>item.id === filteredvalue)

    console.log(filteredItems);

    console.log("================================================================");
    console.log(hoveredValue);
    console.log("================================================================");

    return(
            <section id="portifolio" className="portifolio">
                <PageHeaderContent
                    headerText = "My Portifólio"
                    icon={<BsInfoCircleFill size={40}/>}
                />

                <div className="portfolio__content">
                    <ul className="portfolio__content_filter">
                        {filterData.map((item) => (
                            <li className={item.filterId === filteredvalue ? 'active' : ''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>{item.label}</li>
                            ))}
                    </ul>

                    <div className="portfolio__content__cards">
                        {
                            portifolioData.map((item, index) => (
                                <div className="portfolio__content__cards__item"
                                key={`cardItem${item.name.trim()}`}
                                onMouseEnter={()=>handleHover(index)}
                                onMouseLeave={()=>handleHover(null)}
                                >

                                    <div className="portfolio__content__cards__item__img-wrapper">
                                        <a>
                                            <img alt="dummy data" src={item.image}/>
                                        </a>
                                    </div>
                                    <div className="overlay">
                                        {index === hoveredValue && (
                                                <div>
                                                    <p>{item.name}</p>
                                                    <button>Visit</button>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
    );
}

export default Portifolio;