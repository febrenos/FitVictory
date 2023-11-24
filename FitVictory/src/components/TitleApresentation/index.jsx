import React from 'react'
import Button from '../Btn/index'
import * as Styled from './style.jsx';

export default function() {
    function openLink(){
        window.open('https://snack.expo.dev/@fe.brenos/fitvictory', '_blank');
      };
      
    return(
        <Styled.Content>  
            <Styled.Title>Tenha uma vida mais saudável</Styled.Title>
            <Styled.SubTitle>Crie experiências saudáveis únicas e inesquecíveis</Styled.SubTitle>
            <Styled.Margin>
                <Button text={"Começar! (em breve)"} size={"md"} background={"var(--primary-color)"} onClick={openLink}/>
            </Styled.Margin>
        </Styled.Content>
    )
}