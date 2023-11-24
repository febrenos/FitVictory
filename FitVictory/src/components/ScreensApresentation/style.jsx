import styled, {keyframes} from "styled-components"

// div
// perspective:800px;
// transform: rotate(-30deg) skew(25deg) scale(45deg);
// transform: rotateY(45deg) translateY(-45px);


//  perspective: 5000px;
// perspective-origin: left bottom;
// transform-style: flat;
// img
// transform: rotateY(-20deg) translateY(-45px);
// animation: ${float} 5s cubic-bezier(0.11,-0.23, 1, 1.18) infinite, ${spin} 50s cubic-bezier(0, 0, 1, 1.0) infinite;

const floatCalendar = keyframes`
  50% {
    transform: translateY(-15px);
  }
`;
const floatKeywords = keyframes`
  44% {
    transform: translateY(220px) translateX(-200px);
  }
`;
const floatTrip = keyframes`
  49% {
    transform: translateY(50px) translateX(200px);
  }
`;

const floatTrip1 = keyframes`
  49% {
    transform: translateY(20px) translateX(-40px);
  }
`;
const floatAlert = keyframes`
  49% {
    transform: translateY(-100px) translateX(-200px);
  }
`;
const floatAlert1 = keyframes`
  49% {
    transform: translateY(5px) translateX(-30px);
  }
`;
export const Content = styled.div`
  display: flex;
  width: 300px; /* Defina a largura da Content de acordo com suas necessidades */
  margin: 0 auto; /* Centralize a Content na tela */
  perspective: 800px;
  img, div img{
    width: 100%;
    height: auto;
  }
  img, div img{
    margin:0;
  }
  @media(width < 1200px){
    margin: 0;
    width: 90vw;
    max-width: 450px;
  }
`;
export const ContentAlert = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%; /* Ocupa toda a largura da Content */
  opacity:.7;
  position:absolute;
  z-index:1;
  transform: translateY(-80px) translateX(-200px);
  animation: ${floatAlert} 4s cubic-bezier(0.11,-0.23, 1, 1.18) infinite;
`;

export const Responsive = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  backdrop-filter: blur(3px);
  transform: rotateY(-20deg) translateY(-55px);
  transition:1s;
  width: 100%;
  @media(width < 1200px){
    display: none;
  }
  &:hover{
    transform: rotateY(0deg) translateY(0);
  }
`;

export const ContentAlert1 = styled.div`
transform: translateY(10px) translateX(-30px);
animation: ${floatAlert1} 4s cubic-bezier(0.11,-0.23, 1, 1.18) infinite;
`;

export const ContentKeywords = styled.div`
  position:absolute;
  z-index:1;
  transform: translateY(230px) translateX(-200px);
  animation: ${floatKeywords} 4s cubic-bezier(0.11,-0.23, 1, 1.18) infinite;
`;

export const ContentCalendar = styled.div`
  opacity:.8;
  z-index:5;
  padding-bottom:-10px;
  animation: ${floatCalendar} 4s cubic-bezier(0.11,-0.23, 1, 1.18) infinite;
`;


export const ContentTrip = styled.div`
opacity:.7;
position:absolute;
z-index:6;
transform: translateY(60px) translateX(200px);
animation: ${floatTrip} 5s cubic-bezier(0.11,-0.23, 1, 1.18) infinite;
`

export const ContentTrip1 = styled.div`
  transform: translateY(30px) translateX(-40px);
  animation: ${floatTrip1} 5s cubic-bezier(0.11,-0.23, 1, 1.18) infinite;
`;

export const Img = styled.img`
width: 100%;
height: auto;
border-radius:20px;
-webkit-box-shadow: 15px 15px 23px 0px rgba(0,0,0,0.33);
-moz-box-shadow: 15px 15px 23px 0px rgba(0,0,0,0.33);
box-shadow: 15px 15px 23px 0px rgba(0,0,0,0.33);
`

export const AllScreens = styled.img`
width: 100%;
height: auto;
animation: ${floatCalendar} 4s cubic-bezier(0.11,-0.23, 1, 1.18) infinite;
@media(width > 1200px){
  display:none;
}
`


