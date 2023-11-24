import styled from 'styled-components';
import {ReactComponent as LinkedinIconSvg} from '../../../img/icons/linkedin.svg'
import {ReactComponent as GitHubIconSvg} from '../../../img/icons/github.svg'

export const Cards = styled.div`
display:flex;
gap:50px;
flex-wrap:wrap;
justify-content:center;
`;

export const Card = styled.div`
  display:flex;
  border-radius: 25px;
  background-color: #c9c9c9;
  padding:15px;
  align-items:center;
  width:400px;
  @media(width < 768px){
    width:100%;
  }
`;

export const UserImage = styled.img`
  border-radius: 50px;
  width:100px;
  height:100px;
  transition:1s;
  background-color: blue;
  filter: saturate(20%) contrast(100%) brightness(80%);
  cursor:pointer;
  @media(width < 768px){
    width:80px;
    height:80px;
  }
  &:hover{
    filter: saturate(100%) contrast(100%) brightness(100%);
  }
  
`;

export const Content = styled.div`
padding-left:20px;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: var(--txt-color);
`;

export const Experience = styled.p`
  font-weight: 400;
  font-size: 17px;
  color: var(--txt-color);
`;

export const Icons = styled.div`
  display:flex;
  gap:10px;
  margin-top:20px;
`;

const iconStyles = `
  width: 27px;
  height: auto;
`;

export const LinkedinIcon = styled(LinkedinIconSvg)`
  ${iconStyles}
  fill: var(--txt-color);
  cursor: pointer;
`;

export const GitHubIcon = styled(GitHubIconSvg)`
  ${iconStyles}
  fill: var(--txt-color);
  cursor: pointer;
`;