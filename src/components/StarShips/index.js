import { useState, useEffect } from 'react';
import { ListStarShips } from './ListStarShips';

import { Switch, Route } from 'react-router-dom';
import { DetailStartShip } from './DetailStartShip';
import { useStarShipsCall } from '../../hooks';
export const StarShips = () => {
  const { responseStarShips, loading, setPage } = useStarShipsCall();
  const handleNextPage = () => {
    setPage((prePage) => prePage + 1);
  };
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    console.log(scrollTop, 'scrollTop');
    console.log(clientHeight, 'clienHeight');
    console.log(scrollHeight, 'scrollHeight');
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prePage) => prePage + 1);
    }
  };
  return (
    <div>
      <Switch>
        <Route path="/star-ships/:id">
          <DetailStartShip
            loading={loading}
            arrayResponse={responseStarShips}
          />
        </Route>
        <Route path="/star-ships/">
          <ListStarShips
            loading={loading}
            handleNextPage={handleNextPage}
            handleScroll={handleScroll}
            response={responseStarShips}
          />{' '}
        </Route>
      </Switch>
    </div>
  );
};
