import Logo from "./Logo";
import Search from "./Search";
import UserNav from "./UserNav";
import { Flex } from "./primitives/Flex";
import { Container } from "../containers/Container";

import styled from "styled-components";

import menu from "../assets/menuLineas.png"


const Header = () => {
  return (
    <>
      <Container height="80px">
        <Flex justifyContent="space-between" width="90%">
          <Logo />
          <Search />
          <UserNav></UserNav>
        </Flex>
      </Container>
      <Linea />
      <Container 
      height="45px"
      >
        <Flex width="90%" justifyContent="flex-star">
          <IconMenu src={menu} />
          <TextCategorias>
            CATEGORIAS
          </TextCategorias>
          <TextOfertas>
            Ofertas destacadas
          </TextOfertas>

        </Flex>
      </Container>
     <Linea2/>

    </>
  );
};
const IconMenu = styled.img`
  width: 25px;


`
const TextCategorias = styled.p`
padding-left: 12px ;
  color: #171717;
  font-weight: bolder;
  font-size: 16px;

`
const TextOfertas=styled.a`
  color: #171717;
  padding-left: 12px;

`
const Linea = styled.div`

  border-top: 2px double #d1d1d1;
`
const Linea2 =styled.div`
  border-bottom: 1px solid #d1d1d1;
  box-shadow: 0 2px 4px rgb(0 0 0 / 13%);
  

`
export default Header;
