import React from "react";
import AlertRain from '../../img/screens/alertRain.png'
import AlertTripChange from '../../img/screens/alertTripChange.png'
import Calendar from '../../img/screens/calendar.png'
import Keywords from '../../img/screens/keywords.png'
import TripMuseuIpiranga from '../../img/screens/tripMuseuIpiranga.png'
import TripSalaSaoPaulo from '../../img/screens/tripSalaSaoPaulo.png'
import AllScreens from '../../img/screens/allScreens.png'
import * as Styled from './style.jsx';


export default function ScreenApresentation(){
  return(
    <Styled.Content>
      <Styled.AllScreens src={AllScreens}/>
      <Styled.Responsive>
          <Styled.ContentCalendar>
            <Styled.Img src={Calendar}/>
          </Styled.ContentCalendar>
          <Styled.ContentAlert>
            <Styled.ContentAlert1>
              <Styled.Img src={AlertTripChange}/>
            </Styled.ContentAlert1>
            <Styled.Img src={AlertRain}/>
          </Styled.ContentAlert>
          <Styled.ContentKeywords>
            <Styled.Img src={Keywords}/>
          </Styled.ContentKeywords>
          <Styled.ContentTrip>
            <Styled.ContentTrip1>
              <Styled.Img src={TripMuseuIpiranga}/>
            </Styled.ContentTrip1>
              <Styled.Img src={TripSalaSaoPaulo}/>
          </Styled.ContentTrip>
      </Styled.Responsive>
    </Styled.Content>
  )
}