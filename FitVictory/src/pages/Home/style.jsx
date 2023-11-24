import styled from "styled-components"

export const Page = styled.div`
& > * {
    margin-bottom: 50px;
  }
  padding: 1.5vh;
  z-index:9999;
  position:relative;
`
export const ContentTop = styled.div`
    // *{
    //     background-color: #202857;;
    // }
    height: 500px;
    overflow-x: clip;
    padding: 0 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 768px) {
        flex-direction: column;
        gap:70px;
        margin-bottom:230px;
    }
`

export const Sponsors = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;


export const Img = styled.img`
  height: 40px;
  width: auto;
  filter: grayscale(100%) saturate(100%) contrast(0%) brightness(100%);
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  filter: grayscale(100%) saturate(100%) contrast(0%) brightness(100%);
`;

export const Title = styled.h2`
margin-top:100px;
color: var(--txt-color);
`
export const Center = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:50px;
`