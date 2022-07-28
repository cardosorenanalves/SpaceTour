import React from "react";
import { Header } from "../../global/components/Header";
import img from '../../global/assets/destination/image-moon.png'
import { 
    Container,
    Content,
    PlanetDiv,
    Title,
    PlanetImage,
    InfoDiv,
    Planets,
    ButtonPlanet,
    PlanetName,
    PlanetText,
    LineDiv,
    DistanceDiv,
    TitleD,
    Distance,
    TimeDiv,
    TitleT,
    Time
} from "./styles";

export function Destination(){
    return(
        <Container>
            <Header/>
            <Content>
                <PlanetDiv>
                    <Title>01 PICK YOUR DESTINATION</Title>
                    <PlanetImage 
                    src={img}
                    />
                </PlanetDiv>
                <InfoDiv>
                    <Planets>
                        <ButtonPlanet>MOON</ButtonPlanet>
                        <ButtonPlanet>MARS</ButtonPlanet>
                        <ButtonPlanet>EUROPA</ButtonPlanet>
                        <ButtonPlanet>TITAN</ButtonPlanet>
                    </Planets>
                    <PlanetName>MOON</PlanetName>
                    <PlanetText></PlanetText>
                    <LineDiv/>
                    <DistanceDiv>
                        <TitleD></TitleD>
                        <Distance></Distance>
                    </DistanceDiv>
                    <TimeDiv>
                        <TitleT></TitleT>
                        <Time></Time>
                    </TimeDiv>
                </InfoDiv>
            </Content>
        </Container>
    );
}