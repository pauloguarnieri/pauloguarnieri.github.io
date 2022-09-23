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
      {/* <FaGgCircle size={50} /> */}
      <MenuContainer className="desktopNav">
        <a href="http://pauloguarnieri-github-io.vercel.app/#top">About Me</a>
        <a href="http://pauloguarnieri-github-io.vercel.app/#techs">Skills and tools</a>
        <a href="http://pauloguarnieri-github-io.vercel.app/#projects">Projects</a>
      </MenuContainer>
      <HeaderButton onClick={() => setNavModal(!navModal)}>
        {navModal === false ? <FaBars color="white" /> : <VscChromeClose color="white" />}
      </HeaderButton>
      {navModal === false ? <></>
        :
        <NavContainer>
          <NavButton onClick={() => setNavModal(false)} href="pauloguarnieri-github-io.vercel.app/#top" target="_top">About me</NavButton>
          <NavButton onClick={() => setNavModal(false)} href="pauloguarnieri-github-io.vercel.app/#techs">Skills and tools</NavButton>
          <NavButton onClick={() => setNavModal(false)} href="pauloguarnieri-github-io.vercel.app/#projects">Projects</NavButton>
        </NavContainer>}
    </HeaderContainer>
  );
};

export default Header;