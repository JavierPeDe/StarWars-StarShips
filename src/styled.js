import styled from 'styled-components';

export const NavBarApp = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #fff;
  margin: 0 0 10px 0;
  div {
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    font-family: 'Press Start 2P', cursive;
    color: #ffe81f;
    border: 1px solid #fff;
    padding: 8px;
    width: 100px;
    text-align: center;
    font-size: 1.2rem;
  }
`;
export const ImgLogo = styled.img`
  height: 180px;
  display: block;
  margin: auto;
`;
export const InUp = styled.button`
  background: #000;
  border: none;
  color: white;
  padding: 15px;
`;
export const ButtonLogin = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
