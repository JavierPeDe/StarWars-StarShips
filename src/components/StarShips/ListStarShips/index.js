import { ItemStarShip } from './ItemStarShip';
import imgLoading from '../../../assets/img/loadingImg.gif';
import { Llistat } from './styled';
export const ListStarShips = ({
  response,
  loading,
  handleNextPage,
  handleScroll,
}) => {
  const finalList = response.map((item, id) => (
    <ItemStarShip key={id} nameShip={item.name} model={item.model} id={id} />
  ));

  return loading ? (
    <div style={{ textAlign: 'center' }}>
      <img src={imgLoading} />{' '}
    </div>
  ) : (
    <Llistat onScroll={handleScroll}>
      {finalList}
      <button onClick={handleNextPage}>Get next page</button>
    </Llistat>
  );
};
