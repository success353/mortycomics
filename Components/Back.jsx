import React from 'react';

import { BackwardIcon } from '@heroicons/react/24/outline';

function Back() {
  function goBack() {
    window.history.back();
  }
  return (
    <div className="py-10 px-1">
      <div
        onClick={goBack}
        className="flex py-2 justify-center items-center font-inter border w-32 rounded-md text-sm cursor-pointer"
      >
        <span className="mr-2">
          <BackwardIcon className="h-5 w-5" />
        </span>
        Go back
      </div>
    </div>
  );
}

export default Back;
