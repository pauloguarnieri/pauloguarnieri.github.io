import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.png";
import { useState } from "react";
import { HeaderContainer, HeaderButton, NavContainer, NavButton, MenuContainer } from "./styles";
import { useHistory } from "react-router-dom";

import { VscChromeClose } from "react-icons/vsc";



const HeaderTech = () => {
  const [navModal, setNavModal] = useState(false);
  const history = useHistory();

  function handleOnClick() {
    setNavModal(false)
    history.push('/')
  }

  return (

    <HeaderContainer >
      <img src={logo} alt="imagem logo" />
      <MenuContainer className="desktopNav">
        <a onClick={() => history.push('/')} href='#top'>Pagina Inicial</a>
      </MenuContainer>
      <HeaderButton onClick={() => setNavModal(!navModal)}>
        {navModal === false ? <FaBars color="white" /> : <VscChromeClose color="white" />}
      </HeaderButton>
      {navModal === false ? <></>
        :
        <NavContainer>
          <NavButton onClick={() => handleOnClick()} >Pagina Inicial</NavButton>
        </NavContainer>}
    </HeaderContainer>
  );
};

export default HeaderTech;