import styled from 'styled-components';
import BackgroundImg from '../../global/assets/technology/background-technology-desktop.jpg'

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
margin-top: 5%;
`;

export const Buttons = styled.div`
margin-left: 12%;
margin-top: 6%;
`;

export const Button = styled.div`
cursor: pointer;
display: flex;
width: 75px;
height: 75px;
border-radius: 50%;
border: 1px solid;
border-color: ${({theme}) => theme.colors.shape};
margin-bottom: 35%;
justify-content: center;
align-items: center;

`;

export const TextButton = styled.text`
color: ${({theme}) => theme.colors.shape};
 font-size: 32px;
 font-family: 'Bellefair', serif;
`;

export const InfoDiv = styled.div`
display: flex;
flex-direction: column;
width: 470px;
height: 303px;

`;

export const Title = styled.text`
color: ${({theme}) => theme.colors.shape};
 margin-bottom: 3%;
 font-family: 'Barlow Condensed', sans-serif;
 font-size: 28px;
 margin-bottom: 5%;
 letter-spacing: 4.725px;
`;

export const InfoTitle = styled.div`
color: ${({theme}) => theme.colors.shape};
font-family: 'Barlow Condensed', sans-serif;
font-size: 16px;
`;

export const VehicleName = styled.div`
color: ${({theme}) => theme.colors.shape};
 font-size: 56px;
 font-family: 'Bellefair', serif;
`;

export const Description = styled.div`
color: ${({theme}) => theme.colors.shape};
 font-size: 18px;
 width: 70%;
 font-family: 'Barlow', sans-serif;
 margin-top: 3%;
`;

export const VehicleImage = styled.img`
width: 450px;
height: 440px;
`;