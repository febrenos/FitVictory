import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  background: var(--bg-secondary);
  width:100%;
  height:auto;
  border-radius: 20px;
  overflow: hidden;
  align-items:center;
  padding: 0 0 30px 0;
`;

export const CardHeaderLeft = styled.div`
top: 0px;
width: 25px;
border-top-right-radius: 25px;
box-shadow: 0 -25px 0 0 var(--bg-primary);
`;

export const CardHeader = styled.h2`
width:20%;
text-align: center;
color: var(--txt-color);
width: auto;
font-weight: bold;
padding: 10px 15px;
background: var(--bg-primary);
border-radius: 0 0 20px 20px;
`;


export const CardHeaderRight = styled.div`
top: 0px;
height: 50px;
width: 25px;
border-top-left-radius: 25px;
box-shadow: 0 -25px 0 0 var(--bg-primary);
// background: var(--bg-secondary);
`;

export const Align = styled.div`
display: flex;
`;

export const Content = styled.div`
display: flex;
height:100%;
align-items: center;
text-align: center;
justify-content: space-around;
@media(width < 768px){
  flex-direction:column;
}
`;
export const Text = styled.p`
padding: 20px 20px 0 20px;
display: flex;
height:100%;
max-width: 80vw;
align-items: center;
text-align: center;
justify-content: space-around;
word-wrap: break-word;
@media(width < 768px){
  flex-direction:column;
}

`;

// export default {
//   Card: styled.div`
//     font-size: 16px;
//     color: #333;
//     line-height: 1.5;
//   `
// };
