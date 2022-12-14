import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.png";
import { useState } from "react";
import { HeaderContainer, HeaderButton, NavContainer, NavButton, MenuContainer } from "./styles";

import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [navModal, setNavModal] = useState(false);

  return (

    <HeaderContainer >
      <img src={logo} alt="imagem logo" />
      <MenuContainer className="desktopNav">
        <a href="#top">Sobre mim</a>
        <a href="#techs">Habilidades e ferramentas</a>
        <a href="#projects">Projetos</a>
      </MenuContainer>
      <HeaderButton onClick={() => setNavModal(!navModal)}>
        {navModal === false ? <FaBars color="white" /> : <VscChromeClose color="white" />}
      </HeaderButton>
      {navModal === false ? <></>
        :
        <NavContainer>
          <NavButton onClick={() => setNavModal(false)} href="#top" target="_top">Sobre mim</NavButton>
          <NavButton onClick={() => setNavModal(false)} href="#techs">Habilidades e ferramentas</NavButton>
          <NavButton onClick={() => setNavModal(false)} href="#projects">Projetos</NavButton>
        </NavContainer>}
    </HeaderContainer>
  );
};

export default Header;