import React from "react";
import * as Styled from './style.jsx';


export default function Footer() {
  return (
    <Styled.Footer>
      <Styled.Flex>
        <Styled.FooterText>&copy; 2023</Styled.FooterText>
        <Styled.FooterTextCompany>FitVictory.</Styled.FooterTextCompany>
      </Styled.Flex>
      <Styled.FooterText>All rights reserved.</Styled.FooterText>
    </Styled.Footer>
  )
}
