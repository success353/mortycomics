import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

function Display() {
  const [data, setData] = useState(null);
  const [api, setApi] = useState('https://rickandmortyapi.com/api/character');
  useEffect(() => {
    async function getCharacters() {
      const response = await axios.get(api);
      const data = await response.data;
      console.log(data);
      setData(data);
    }

    getCharacters();
  }, [api]);

  function next() {
    setApi(data.info.next);
  }
  function prev() {
    setApi(data.info.prev);
  }
  return (
    <div className="pt-5 px-5 text-xs">
      {data && (
        <div className="flex justify-between items-center">
          <div className="border rounded-md px-2 py-1 cursor-pointer">
            Count {data.info.count}
          </div>
          <div className="border rounded-md px-2 py-1 cursor-pointer">
            {data.info.pages} Pages
          </div>
          {data.info.next && (
            <div
              onClick={next}
              className="border rounded-md px-2 py-1 cursor-pointer"
            >
              Next
            </div>
          )}
          {data.info.prev && (
            <div
              onClick={prev}
              className="border rounded-md px-2 py-1 cursor-pointer"
            >
              Prev
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Display;
