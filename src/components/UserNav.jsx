import styled from "styled-components";
import { Flex } from "./primitives/Flex";

//img
import userLogo from "../assets/iconUser.png";
import shoppingCar from "../assets/shopping-trolley.png";
import favorites from "../assets/heart.png";

function UserNav() {
  return (
    <>
      <Flex>
        <Icons src={favorites}></Icons>
        
        <Icons src={userLogo}></Icons>
        <MiCuenta>Mi Cuenta ▼</MiCuenta>
        <Icons src={shoppingCar}></Icons>
      </Flex>
    </>
  );
}
 
const Icons = styled.img`
  width: 30px;
  margin-left: 14px;
`;
const MiCuenta = styled.p`
  color: gray;
  font-size: 14px;
`;


export default UserNav;
