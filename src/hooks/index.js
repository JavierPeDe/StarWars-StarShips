import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStarShipsCall = () => {
  const baseURL = `https://swapi.dev/api/starships/?page=`;
  const [responseStarShips, setResponseStarShips] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${baseURL}${page}`);
        setResponseStarShips((preResponseStarShips) =>
          preResponseStarShips.concat(result.data.results)
        );
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  return { responseStarShips, error, loading, setPage };
};
