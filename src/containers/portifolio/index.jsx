import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderConter";

const Portifolio=() => {
    return(
            <section id="portifolio" className="portifolio">
                <PageHeaderContent
                    headerText = "My Portifólio"
                    icon={<BsInfoCircleFill size={40}/>}
                />
            </section>
    );
}

export default Portifolio;