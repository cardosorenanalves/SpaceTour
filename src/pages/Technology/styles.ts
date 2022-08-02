import styled from 'styled-components';
import BackgroundImg from '../../global/assets/technology/background-technology-desktop.jpg'

interface IButton{
  onActive: boolean;
}


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

export const Button = styled.div<IButton>`
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
background-color: ${({theme, onActive}) =>
onActive === true ? theme.colors.shape : 'none'};
transition: 0.2s;
:hover{
    background-color: ${({theme, onActive}) => onActive ? theme.colors.shape : theme.colors.shape_dark};   
 }
`;

export const TextButton = styled.text<IButton>`
color: ${({theme, onActive}) =>
onActive === true ? theme.colors.text_dark : theme.colors.shape};
 font-size: 32px;
 font-family: 'Bellefair', serif;
`;

export const InfoDiv = styled.div`
display: flex;
flex-direction: column;
height: 303px;
margin-top: 5%;
margin-left: 10%;
`;

export const Title = styled.text`
color: ${({theme}) => theme.colors.shape};
 margin-bottom: 3%;
 font-family: 'Barlow Condensed', sans-serif;
 font-size: 28px;
 
 letter-spacing: 4.725px;
`;

export const InfoTitle = styled.div`
color: ${({theme}) => theme.colors.shape};
font-family: 'Barlow Condensed', sans-serif;
font-size: 16px;
padding-top: 5%;
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

export const TitleDiv = styled.div`
margin-left: 15%;
`;

export const TitleAndInfo = styled.div`
display: flex;
flex-direction: column;
padding-left: 5%;
`;

export const TextDiv = styled.div`
display: flex;
flex-direction: row;

`;