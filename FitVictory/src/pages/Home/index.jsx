import React, {useRef} from 'react'
import HeaderApresentation from '../../components/HeaderApresentation'
import CardApresentation from '../../components/Cards/CardFull/index'
import TextApresentation from '../../components/TitleApresentation'
import ScreenApresentation from '../../components/ScreensApresentation'
import Fiap from '../../../src/img/fiap.png'
import Logo from '../../img/logo.png'
import chatGpt from '../../img/chatGpt.png'
import googlePlaces from '../../img/googlePlaces.png'
import CardHoverText from '../../components/Cards/CardHoverText'
import AboutUs from '../../components/Cards/AboutUs'
import BackgroundColor from '../../components/BackgroundColor'
import Footer from '../../components/Footer'
import * as Styled from './style.jsx'

export default function Home() {
    const sobreRef = useRef(null);
    const parceriasRef = useRef(null);
    const sobreNosRef = useRef(null);
    return(
        <>
        <BackgroundColor/>
        <Styled.Page>  
            <HeaderApresentation sobreRef={sobreRef} parceriasRef={parceriasRef} sobreNosRef={sobreNosRef}/>
            <Styled.ContentTop>
                <TextApresentation/>
                <ScreenApresentation/>
            </Styled.ContentTop>
            <CardApresentation text="Sobre" ref={sobreRef} />
            <CardHoverText/>
            <Styled.Center>
                <Styled.Title ref={parceriasRef}>Oferecimento</Styled.Title>
                <Styled.Sponsors>
                    <Styled.Img src={Fiap}/>
                    <Styled.Logo src={Logo}/>
                    <Styled.Img src={chatGpt}/>
                    <Styled.Img src={googlePlaces}/>
                </Styled.Sponsors>
            </Styled.Center>
            <Styled.Center>
                <Styled.Title ref={sobreNosRef}>Sobre nós</Styled.Title>
                <AboutUs/>
            </Styled.Center>
        </Styled.Page>
        <Footer/>
        </>
    )
}