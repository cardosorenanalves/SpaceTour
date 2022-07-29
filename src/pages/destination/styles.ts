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
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 3%;
`;

export const PlanetDiv = styled.div`
display: flex;
margin-left: 10%;
flex-direction: column;
margin-right: 5%;

`;
export const Title = styled.text`
color: ${({theme}) => theme.colors.shape};
margin-bottom: 3%;
font-family: 'Barlow Condensed', sans-serif;
font-size: 28px;

`;
export const PlanetImage = styled.img`
width: 445px;
height: 445px;
margin-left: 18%;
`;
export const InfoDiv = styled.div`
display: flex;
flex-direction: column;
margin-top: 3%;
width: 445px;
margin-right: 10%;
`;
export const Planets = styled.div`
display: flex;
flex-direction: row;
`;
export const ButtonPlanet = styled.text`
cursor: pointer;
margin-right: 5%;
color: ${({theme}) => theme.colors.shape};
font-family: 'Barlow Condensed', sans-serif;

`;

export const PlanetName = styled.text`
color: ${({theme}) => theme.colors.shape};
font-size: 100px;
margin-top: 5%;
font-family: 'Bellefair', serif;
`;

export const PlanetText = styled.text`
color: ${({theme}) => theme.colors.shape};
font-size: 18px;
margin-top: 4%;
font-family: 'Barlow', sans-serif;
`;

export const LineDiv = styled.div`
width: 100%;
height: 0.5px;
background-color: ${({theme}) => theme.colors.shape};
margin-top: 10%;
`;

export const DataDiv = styled.div`
display: flex;
flex-direction: row;
margin-top: 7%;
`;

export const DistanceDiv = styled.div`
display: flex;
flex-direction: column;
margin-right: 15% ;

`;

export const TitleD = styled.div`
color: ${({theme}) => theme.colors.shape};
font-size: 14px;
font-family: 'Barlow Condensed', sans-serif;
`;

export const Distance = styled.div`
color: ${({theme}) => theme.colors.shape};
font-size: 28px;
font-family: 'Bellefair', serif;
`;

export const TimeDiv = styled.div`
display: flex;
flex-direction: column;

`;

export const TitleT = styled.div`
color: ${({theme}) => theme.colors.shape};
font-size: 14px;
font-family: 'Barlow Condensed', sans-serif;
`;

export const Time = styled.div`
color: ${({theme}) => theme.colors.shape};
font-size: 28px;
font-family: 'Bellefair', serif;
`;