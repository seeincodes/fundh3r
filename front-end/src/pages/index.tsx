import React from 'react';

import About from '../components/About';
// import Canvas from '../components/Canvas';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Mission from '../components/Mission';
import OurTeam from '../components/OurTeam';
import Donate from '../components/Donate';
import Register from '../components/Register';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}>
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      {/* OUR MISSION */}
      <LazyShow>
        <>
          <Mission />
        </>
      </LazyShow>
      {/* OUR TEAM */}
      <LazyShow>
        <>
          <OurTeam />
        </>
      </LazyShow>
      {/* DONATE TO CAUSE */}
      <LazyShow>
        <>
        <Donate />
        </>
      </LazyShow>
      {/* REGISTER */}
      <LazyShow>
        <>
        <Register />
        </>
      </LazyShow>
      {/* ABOUT LINKS */}
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
    </div>
  );
};

export default App;
