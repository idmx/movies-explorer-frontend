import React, { useRef } from 'react';
import Promo from './Promo';
import AboutProject from './AboutProject';
import Tech from './Techs';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import './Main.css';

const Main = () => {
  const ref = useRef();

  const scroll = () => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });

  return (
    <main className="main">
      <Promo scroll={scroll}/>
      <AboutProject ref={ref}/>
      <Tech />
      <AboutMe />
      <Portfolio />
    </main>
  );
};

export default Main;
