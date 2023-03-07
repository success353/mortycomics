import React from 'react';
import Back from './Back';
import Display from './Display';

function Characters() {
  return (
    <div className="font-inter">
      <Back />
      <h1 className="text-gray-700 tracking-wide font-bold pl-2 text-5xl lg:text-8xl">
        Characters
      </h1>
      <Display />
    </div>
  );
}

export default Characters;
