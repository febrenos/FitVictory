import React from "react";
import Felipe from '../../../img/felipe.png'
import Thiago from '../../../img/thiago.png'
import Lucas from '../../../img/lucas.png'
import Marcus from '../../../img/marcus.png'
import * as Styled from './style.jsx';


export default function AboutUs() {
  return (
      <Styled.Cards>
        <Styled.Card>
          <Styled.UserImage src={Thiago}/>
          <div>
            <Styled.Content>
              <Styled.Name>Thiago Ribeiro</Styled.Name>
              <Styled.Experience>Backend</Styled.Experience>
              <Styled.Icons>
                <a href="https://linkedin.com/in/trcosta97" target="_blank" rel="noopener noreferrer">
                  <Styled.LinkedinIcon/>
                </a>
                <a href="github.com/trcosta97" target="_blank" rel="noopener noreferrer">
                  <Styled.GitHubIcon/>
                </a>
              </Styled.Icons>
            </Styled.Content>
          </div>
        </Styled.Card>
        <Styled.Card>
          <Styled.UserImage src={Felipe}/>
          <div>
            <Styled.Content>
              <Styled.Name>Felipe Sugisawa</Styled.Name>
              <Styled.Experience>Fullstack</Styled.Experience>
              <Styled.Icons>
              <a href="https://www.linkedin.com/in/felipe-sugisawa/" target="_blank" rel="noopener noreferrer">
                <Styled.LinkedinIcon/>
              </a>
              <a href="https://github.com/febrenos" target="_blank" rel="noopener noreferrer">
                <Styled.GitHubIcon/>
              </a>
              </Styled.Icons>
            </Styled.Content>
          </div>
        </Styled.Card>
        <Styled.Card>
          <Styled.UserImage src={Marcus}/>
          <div>
            <Styled.Content>
              <Styled.Name>Marcus Dagostini</Styled.Name>
              <Styled.Experience>QA & PO</Styled.Experience>
              <Styled.Icons>
                <a href="https://www.linkedin.com/in/marcus-dagostini-6aa585227/" target="_blank" rel="noopener noreferrer">
                  <Styled.LinkedinIcon/>
                </a>
                <a href="https://github.com/MarcusDagostini04" target="_blank" rel="noopener noreferrer">
                  <Styled.GitHubIcon/>
                </a>
              </Styled.Icons>
            </Styled.Content>
          </div>
        </Styled.Card>
        <Styled.Card>
          <Styled.UserImage src={Lucas}/>
          <div>
            <Styled.Content>
              <Styled.Name>Lucas Oliveira</Styled.Name>
              <Styled.Experience>Backend</Styled.Experience>
              <Styled.Icons>
                <a href="https://www.linkedin.com/in/luvi21" target="_blank" rel="noopener noreferrer">
                  <Styled.LinkedinIcon/>
                </a>
                <a href="https://github.com/Lucsv1" target="_blank" rel="noopener noreferrer">
                  <Styled.GitHubIcon/>
                </a>
              </Styled.Icons>
            </Styled.Content>
          </div>
        </Styled.Card>
      </Styled.Cards>
  )
}
