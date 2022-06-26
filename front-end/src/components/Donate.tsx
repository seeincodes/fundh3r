import React from 'react';
import Divider from './Divider';
import config from '../config/index.json';

const Donate = () => {
  const { donate } = config;
  const { title, subtitle, description, items: featuresList} = donate;
  return (
      <div className={`py-12 bg-background`} id="donate">
        <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}>
          {donate.title.split(' ').map((word, index) => (
            <span key={index} className={index % 2 ? 'text-primary' : 'text-border'}>{word}{' '}</span>))}
        </h1>
        <Divider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{subtitle}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {description}
            </p>
          </div>
          <div className="mt-20">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {featuresList.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className={`absolute flex items-center justify-center h-32 w-32 rounded-md bg-background text-tertiary border-primary border-4`}>
                      <img
                        className={`inline-block h-35 w-35 rounded-full`}
                        src={feature.icon}
                        alt={feature.name}/>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
                    </div>
                    <p className="ml-56 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-56 text-base text-gray-500">
                    {feature.description}
                  </dd>
                  <dd className="mt-2 ml-56 text-base text-black-500">
                    <b>Funds used for:</b> {feature.funds}
                  </dd>
                  <div className="rounded-md shadow">
                    <a className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-5`}> Donate </a>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
};

export default Donate;
