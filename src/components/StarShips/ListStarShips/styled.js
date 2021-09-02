import styled from 'styled-components';

export const Llistat = styled.div`
  overflow-y: scroll;
  height: 75vh;
  ::-webkit-scrollbar {
    width: 6px;
    border-left: 1px solid #e6ecf8;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ffe81f;
  }
`;
