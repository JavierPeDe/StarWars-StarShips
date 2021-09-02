import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TableInfo, TitleInfo } from './style';
import loadingImg from '../../../assets/img/loadingImg.gif';
export const DetailStartShip = ({ arrayResponse, loading }) => {
  var { id } = useParams();
  const response = arrayResponse[id];
  return loading === false ? (
    <div>
      <dt>
        <TitleInfo>{response.name}</TitleInfo>
      </dt>
      <TableInfo>
        <div>
          <dt>Model:</dt>
          <dd>{response.model}</dd>
        </div>
        <div>
          <dt>Manufacturer:</dt>
          <dd>{response.manufacture}</dd>
        </div>
        <div>
          <dt>Cost in credits:</dt>
          <dd>{response.cost_in_credits}</dd>
        </div>
        <div>
          <dt>Lenght:</dt>
          <dd>{response.length}</dd>
        </div>
        <div>
          <dt>Max atmosphering Speed:</dt>
          <dd>{response.max_atmosphering_speed}</dd>
        </div>
        <div>
          <dt>Crew:</dt>
          <dd>{response.crew}</dd>
        </div>
        <div>
          <dt>Passengers:</dt>
          <dd>{response.passengers}</dd>
        </div>
        <div>
          <dt>Cargo Capacity:</dt>
          <dd>{response.cargo_capacity}</dd>
        </div>
        <div>
          <dt>Consumables:</dt>
          <dd>{response.consumables}</dd>
        </div>
        <div>
          <dt>Hyperdrive Rating:</dt>
          <dd>{response.hyperdrive_rating}</dd>
        </div>
        <div>
          <dt>MGLT:</dt>
          <dd>{response.MGLT}</dd>
        </div>
        <div>
          <dt>Class:</dt>
          <dd>{response.starship_class}</dd>
        </div>
      </TableInfo>
    </div>
  ) : (
    <div style={{ textAlign: 'center' }}>
      <img src={loadingImg} />
    </div>
  );
};
