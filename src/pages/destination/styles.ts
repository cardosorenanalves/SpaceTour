import styled from 'styled-components';
import BackgroundImg from '../../global/assets/destination/background-destination-desktop.jpg'

export const Container = styled.div`
display: block;
  width: 100%;
  height: 100vh;
  background: url(${BackgroundImg}) ;
  background-size: cover;
  
`;

export const Content = styled.div`

`;

export const PlanetDiv = styled.div`
display: flex;
margin-left: 5%;
text-align: center;

`;
export const Title = styled.text`
color: ${({theme}) => theme.colors.shape};

`;
export const PlanetImage = styled.img`
margin-top: 5%;
width: 445px;
height: 445px;
`;
export const InfoDiv = styled.div`

`;
export const Planets = styled.div`

`;
export const ButtonPlanet = styled.div`

`;

export const PlanetName = styled.div`

`;

export const PlanetText = styled.div`

`;

export const LineDiv = styled.div`

`;

export const DistanceDiv = styled.div`

`;

export const TitleD = styled.div`

`;

export const Distance = styled.div`

`;

export const TimeDiv = styled.div`

`;

export const TitleT = styled.div`

`;

export const Time = styled.div`

`;