import React from 'react';
import config from '../config/index.json';
import Divider from './Divider';

const Mission = () => {
  const { mission } = config;
  const [firstItem] = mission.items;

  return (
    <section className={`bg-background py-8`} id="mission">
      <div className={`container max-w-5xl mx-auto`}>
        <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}>
          {mission.title.split(' ').map((word, index) => (
            <span key={index} className={index % 2 ? 'text-primary' : 'text-border'}>{word}{' '}</span>))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-6/6 sm:w-1/2 p-6 mt-20`}>
            <h3 className={`text-3xl text-gray-800 font-bold leading-none mb-3`}> {firstItem?.title}</h3>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-4`}>
            <img
              className="h-4/6"
              src={firstItem?.img}
              alt={firstItem?.title}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
