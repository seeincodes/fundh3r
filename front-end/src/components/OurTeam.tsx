import React from 'react';
import Divider from './Divider';
import config from '../config/index.json';

const OurTeam = () => {
  const { team } = config;
  return (
    <section className={`bg-background py-8`} id="team">
      <div className={`container max-w-5xl mx-auto`}>
        <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}>
          {team.title.split(' ').map((word, index) => (
            <span key={index} className={index % 2 ? 'text-primary' : 'text-border'}>{word}{' '}</span>))}
        <Divider />
        </h1>
      </div>
      <h2 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}>
            Daiana, Laura, Xian, Greisy & Alejandra 🚀
      </h2>
    </section>
  );
};

export default OurTeam;
