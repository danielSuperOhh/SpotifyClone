import styled from "styled-components";
import { colors } from "../colors";

export const Button = ({value, onClick})=>{
    return(
        <Container onClick = {onClick}>
            {value}
        </Container>
    )
}

const Container = styled.button`
  background-color: ${colors.mainBlack};
  padding: 15px 31px;
  border-radius: 31px;
  border: none;
  :hover{
        background-color: ${colors.mainBlackHover};
    }

`;