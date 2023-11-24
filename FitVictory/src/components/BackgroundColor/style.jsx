import styled, {keyframes} from 'styled-components';

const spin = keyframes`
  100% {
    transform: rotate(-360deg);
  }
`;
const floatItem2 = keyframes`
  50% {
    transform: translateY(-105px) translateX(205px);
  }
`;

const floatItem3 = keyframes`
  50% {
    transform: translateY(400px) translateX(105px);
    background-color: var(--secondary-color);
  }
`;

export const Content = styled.div`
position:absolute;
background-color: var(--bg-primary);
width:100%;
z-index:5;
height:775px;
filter: blur(30px);
overflow:hidden;
`;

export const Items = styled.div`
display: flex;
width:600px;
height:600px;
animation: ${spin} 20s linear infinite;
`;

export const Item1 = styled.div`
border-radius:50%;
background-color: var(--primary-color);
position:relative;
height:105px;
width:105px;
z-index:0;
`;
export const Item2 = styled.div`
border-radius:50%;
backdrop-filter: blur(10px);
background-color: var(--primary-color);
position:relative;
transform: translateY(105px) translateX(105px);
animation: ${floatItem2} 24s linear infinite;
height:90px;
width:90px;
z-index:0;
`;

export const Item3 = styled.div`
border-radius:50%;
backdrop-filter: blur(10px);
background-color: var(--primary-color);
position:relative;
transform: translateY(150px) translateX(-120px);
animation: ${floatItem3} 24s linear infinite;
height:90px;
width:90px;
z-index:0;
`;