import axios from 'axios';
import { useEffect, useState } from 'react';
import { ItemStarShip } from './ItemStarShip';

export const ListStarShips = ({ response }) => {
  console.log(response);
  const finalList = response.map((item) => (
    <ItemStarShip nameShip={item.name} model={item.model} key={item.model} />
  ));
  return (
    <div>
      <h1>List</h1>
      {finalList}
    </div>
  );
};
