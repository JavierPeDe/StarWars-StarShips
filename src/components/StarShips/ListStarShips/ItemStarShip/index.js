import { Items } from './styled';
import { Link } from 'react-router-dom';
export const ItemStarShip = ({ nameShip, id, model }) => {
  return (
    <Items>
      <Link
        style={{ color: 'inherit', textDecoration: 'inherit' }}
        to={`/star-ships/${id}`}
      >
        <h3>{nameShip}</h3>
        <p>{model}</p>
      </Link>
    </Items>
  );
};
