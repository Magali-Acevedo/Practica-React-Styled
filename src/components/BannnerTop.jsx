import styled from "styled-components";
import { Flex } from "./primitives/Flex";
import { Container } from "../containers/Container";

//img

import phone from "../assets/phone.png";

function BannerTop() {
  return (
    <>
      <Container background="red" height="30px" width="100%">
        <Flex justifyContent="space-between" width="90%">
          <Flex width="300px">
            <IconPhone src={phone} alt="telefono" />
            <TexBanner>Venta telefónica</TexBanner>
            <NumTelBanner>0810-333-2420</NumTelBanner>
          </Flex>

          <TexBanner>Sucursales</TexBanner>
        </Flex>
      </Container>
    </>
  );
}

const IconPhone = styled.img`
  width: 18px;
  margin-right: 8px;
`;
const TexBanner = styled.a`
  padding-right: 6px;
  background-color: red;
  color: white;
  font-weight: lighter;
  font-size: 14px;
  cursor: pointer;
`;
const NumTelBanner = styled.p`
  color: white;
  font-weight: bolder;
`;

export default BannerTop;
