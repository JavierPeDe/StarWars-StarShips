import { useState, useEffect } from 'react';
import { ListStarShips } from './ListStarShips';
import axios from 'axios';
import { DetailStartShip } from './DetailStartShip';

export const StarShips = () => {
  const baseURL = 'https://swapi.dev/api/starships/';
  const [responseStarShips, setResponseStarShips] = useState([{}]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setResponseStarShips(response.data.results);
    });
  }, []);

  return (
    <div>
      {/* <ListStarShips response={responseStarShips} />{' '} */}
      <DetailStartShip response={responseStarShips[0]} />
    </div>
  );
};
