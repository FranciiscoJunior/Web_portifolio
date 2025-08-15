import { Line } from "rc-progress";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderConter";
import { skillsData } from "./utils";
import "./style.scss";

const Skills=() => {
    return(
            <section id="skiils" className="skiils">
                <PageHeaderContent
                    headerText = "Me Skills"
                    icon={<BsInfoCircleFill size={40}/>}
                />

                <div className="skills__content-content-wrapper">
                    {
                        skillsData.map((item, i)=> (
                            <div key={i} className="skills__content-content-wrapper__inner-content">
                                <animate
                                play
                                duration={1}
                                delay={0.3}
                                start={{
                                    transform: 'translateX(-200px)'
                                }}

                                end={{
                                    transform: 'translateX(0px)'
                                }}
                                >
                                
                                <h3 className="skills__content-content-wrapper__inner-content__category-text">{item.label}</h3>

                                    <div className="skills__content-content-wrapper__inner-content__progressbar-container">
                                        {
                                            item.data.map((skillItem, j) => (
                                                <AnimateKeyframes
                                                playduration={1}
                                                keyframes={["opacitty : 1", "opacity : 0"]}
                                                iterationCount ="1"
                                                >
                                                    <div className="progressbar-wrapper" key={j}>
                                                        <p>{skillItem.skillName}</p>
                                                        <Line
                                                        porcent={skillItem.percentage}
                                                        strokeWidth="2"
                                                        strokeColor="var(--yellow-theme-main-color)"
                                                        trailWidth="2"
                                                        strokeLinecap="square"
                                                        />
                                                    </div>
                                                </AnimateKeyframes>
                                            ))
                                        }
                                    </div>
                                </animate>
                            </div>
                        ))
                    }
                </div>
            </section>
    );
};

export default Skills;