import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: rgb(0,0,0, 52%);
  /* background-color: white; */
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  top: 0;
  box-sizing: border-box;
  border-bottom: 1px solid red;
  color: white;
  z-index: 1;
  position: fixed;
  img {
    height: 100%;
  }
  @media (min-width:780px) {
    padding-right: 26%;
  }
`;

export const HeaderButton = styled.button`
  border: 1px solid darkred;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  box-sizing: border-box;
  width:30px;
  height: 30px;
  background-color: var(--color-grey1);
  @media (min-width:780px) {
    display: none;
  }
`;
export const NavContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 49px;
  right: 15px;
  background-color: rgb(255, 0, 0, 60%);
  max-width: 294;
  width: 294px;
  padding: 1px 0.5px;
  border-radius: 2px;
`;

export const NavButton = styled.a`
  width: 98%;
  background-color: var(--color-grey1);
  height: 40px;
  color: white;
  margin: 1px 0px;
  border-radius: 2px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover{
    background-color:transparent;
    border: 2px solid var(--color-grey1);
    color: var(--color-grey1);
    font-weight: 500;
  }
`;

export const MenuContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;
  a{
    display: none;
    color: white;
    padding:10px 30px;
    margin: 0 3px;
    :hover {
      color: red;
      border: 1px solid red;
      border-radius: 3px;
    }
  }
  @media (min-width: 780px) {
    a {
      display:block;
    };
  }
`;