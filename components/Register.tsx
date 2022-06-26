import React from 'react';
import Divider from './Divider';
import config from '../config/index.json';

const Register = () => {
  const { register } = config;
  // const [ firstItem ] = register.items;

  return (
    <section className={`bg-background py-8`} id="register">
      <div className={`container max-w-5xl mx-auto`}>
        <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}>
          {register.title.split(' ').map((word, index) => (
            <span key={index} className={index % 2 ? 'text-primary' : 'text-border'}>{word}{' '}</span>))}
        </h1>
        <Divider />
        <form className="w-full max-w-lg mx-auto">
          <div className="flex flex-wrap -mx-2 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Organization Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                ERC-20 Address #1
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
              <p className="text-black-500 text-xs italic">Optional</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                ERC-20 Address #2
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
              <p className="text-black-500 text-xs italic">Optional</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                ERC-20 Address #3
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
              <p className="text-black-500 text-xs italic">Optional</p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              EIN Number
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
              <p className="text-gray-600 text-xs italic">Needed to verify your NGO</p>
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Desired ENS Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
              <p className="text-gray-600 text-xs italic">Optional, we will set you up with an ENS associated with your ERC-20 Address if you don't already have one.</p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              List what the donations will fund
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
          </div>
          </div>
          <div className="md:flex md:items-center">
          <div className="md:w-1/3">
          <a className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-5`}> Send </a>
    </div>
    <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Register;
