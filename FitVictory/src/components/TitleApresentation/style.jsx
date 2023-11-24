import styled from "styled-components"

export const Content = styled.div`
    max-width: 550px;
    display:flex;
    flex-direction: column;
    padding: 20px 5%;
    gap:10px;
    @media(width < 768px){
        margin-top: 200px;
    }
`
export const Title = styled.h1`
    text-transform: uppercase;
`
export const SubTitle = styled.p`
    width: auto;
`
export const Margin = styled.div`
    margin-top:15px;
`