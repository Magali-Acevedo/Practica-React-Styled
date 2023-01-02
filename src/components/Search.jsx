import styled from "styled-components";

import { Flex } from "./primitives/Flex"

//img icons
import lupa from "../assets/búsqueda.svg";

function Search (){
    return(
        <>
         <SearchForm>
            <Flex>
                <SearchInput
                placeholder="Buscar productos"/>
                <SearchButtom>
                    <ImgLupa src={lupa} alt="icono lupa de búsqueda" />
                </SearchButtom>
            </Flex>

         </SearchForm>
        </>
    )
}
const SearchForm = styled.form`
    width: 50%;
    height: 40px;
    padding: 0 8px 0 12px;
    border: 1px solid #c4c4c4;
    border-radius: 1999px;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    border: 0;
    font-size: 14px;
`
const SearchButtom= styled.button`
    width: 30px;
    height: 30px;
    background: transparent;
    border: 0;
    opacity: 0.8;
    & :hover {
      
      opacity: 0.6;
  }
`
const ImgLupa = styled.img`
    width: 25px;
    cursor: pointer;

`


export default Search;