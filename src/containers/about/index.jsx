import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderConter";
import { Animate } from "react-simple-animate";
import './style.scss';
import {DiHtml5DeviceAccess, DiWebplatform} from "react-icons/di";
import {FaDev, FaDatabase} from "react-icons/fa";


const personalDetails = [
    {
        label: "Name",
        value: "Francisco Júnior",
    },
    {
        label: "Age",
        value: "28",
    },
    {
        label: "Address",
        value: "Rio Grande do Norte - Brasil",
    },
    {
        label: "E-mail",
        value: "contatojuniiordev@gmail.com",
    },
    {
        label: "Contact No",
        value: "+55 (84) 99134-7327",
    },
];

const jobSummary =
    "Bacharel em Sistemas de Informação pela Universidade Federal Rural do Semi-árido - UFERSA. Com experiência prática em vários projetos desenvolvidos utilizando as tecnologias, Html5, Css3, Javascript, Typescript, React, Bootstrap, Tailwind, Next. Também possui sólidos conhecimentos em bancos de dados relacional utilizando o PostgreSQL e Git para versionamento dos projetos armazenamento no Github.Desenvolvedor Web Front-end em ascensão, sempre me desafiando com a criação de projetos que atendam a necessidade do usuário e busque solucionar problemas de forma eficiente e com eficácia, e em busca de novos desafios e aprendizados constantemente ✍️ Apaixonado por desenvolvimento Web e suas vertentes, desde métodos de UI/UX até experiências finas em etapas de desenvolvimento de Software. Possuo habilidades analíticas e pensamento crítico, além de bom relacionamento interpessoal, trabalhando bem em equipe, com boa comunicação, organização, proatividade e resiliência.💎 Estou entre aqueles que acreditam que a tecnologia muda a vida das pessoas para melhor! 🎯 Minha Stack principal: 🛠️ Html5, Css3, Javascript; ⚛️ React, Next, Typescript e Tailwind; 🔃 Git & Github; 🎨 UI/UX para interfaces atraentes, intuitivas e responsivas. 🌎 Idiomas: 🇧🇷 Português - Nativo 🇪🇸 Espanhol - Intermediário 🇺🇸 Inglês - Básico  🔎 Entre em contato: 💌 E-mail: contatojuniiordev@gmail.com 🚀 Instagram: juniiordev📱 WhatsApp: (84) 99134-7327";

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="about__content">

            <div className="about__content__personalWrapper">
                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: "translateX(-900px)",
                    }}
                    end={{
                        transform: "translatex(0px)",
                    }}
                >
                    <h3>Front End Developer</h3>
                    <p>{jobSummary}</p>
                </Animate>

                <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(500px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >

                    <h3 className="personalInformationHeaderText">Personal Information</h3>
                    <ul>
                        {
                            personalDetails.map((item, i)=>(
                                <li key={i}>
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))
                        }
                    </ul>
                </Animate>
            </div>

            <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(600px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                    <div className="about__content__servicesWrapper">
                        <div className="about__content__servicesWrapper__innerContent">
                            <div><FaDev size={60} color="var(--yellow-theme-main-color)"/></div>
                            <div><DiWebplatform size={60} color="var(--yellow-theme-main-color)"/></div>
                            <div><FaDatabase size={60} color="var(--yellow-theme-main-color)"/></div>
                            <div><DiHtml5DeviceAccess size={60} color="var(--yellow-theme-main-color)"/></div>
                        </div>
                    </div>
            </Animate>
            </div>
        </section>
    );
};

export default About;
