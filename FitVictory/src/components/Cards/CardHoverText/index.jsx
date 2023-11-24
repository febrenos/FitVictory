import React from "react";
import img1 from '../../../img/weddingPlannerPana.png'
import img2 from '../../../img/userflowAmico.png'
import img3 from '../../../img/timelineAmico.png'


import * as Styled from './style.jsx';


export default function CardHoverText(){
  return (
    <Styled.Wrapper>
        <Styled.Card>
            <Styled.Img src={img1}/>
            <Styled.Info>
                <Styled.Title>Planejamento</Styled.Title>
                <Styled.Text>Planeje atividades e sua rotina para ter uma vida ainda melhor</Styled.Text>
            </Styled.Info>
        </Styled.Card>
        <Styled.Card>
            <Styled.Img src={img2}/>
            <Styled.Info>
                <Styled.Title>Saúde</Styled.Title>
                <Styled.Text>Melhore a saúde do seus pacientes através do nosso app</Styled.Text>
            </Styled.Info>
        </Styled.Card>
        <Styled.Card>
            <Styled.Img src={img3}/>
            <Styled.Info>
                <Styled.Title>Rank</Styled.Title>
                <Styled.Text>Dispute ranks, ganhe reconpensas e sua suba de nível entre amigos com suas pontuações</Styled.Text>
            </Styled.Info>
        </Styled.Card>
    </Styled.Wrapper>
  )
}
