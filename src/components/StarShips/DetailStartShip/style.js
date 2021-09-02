import styled from 'styled-components';
export const TitleInfo = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  font-family: 'Press Start 2P', cursive;
  margin: 20px;
`;
export const TableInfo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  margin: 30px;
  div {
    border: 1px solid white;

    dd {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;
