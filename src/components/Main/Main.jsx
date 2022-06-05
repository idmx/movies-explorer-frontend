import React, { useRef } from "react";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Tech from "./Techs/Tech";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import './Main.css'

const Main = () => {
  const ref = useRef();

  const scroll = () => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth'})

  return(
    <main className="main">
      <Promo scroll={scroll}/>
      <AboutProject ref={ref}/>
      <Tech />
      <AboutMe />
      <Portfolio />
    </main>
  )
};

export default Main;