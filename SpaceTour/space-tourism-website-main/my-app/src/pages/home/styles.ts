import styled from 'styled-components';
 
import BackgroundImg from '../../global/assets/home/background-home-desktop.jpg'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundImg});
  
  
`;

export const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const TextDiv = styled.div`
display: flex;
flex-direction: column;
width: 450px;
height: 382px;
margin: 0px 165px;
`;

export const H2 = styled.text`
font-size: 18px;
color: ${({theme}) => theme.colors.shape};
font-family: 'Barlow Condensed', sans-serif;
`;

export const H1 = styled.text`
font-size: 150px;
color: ${({theme}) => theme.colors.shape};
font-family: 'Bellefair', serif;
`;

export const H4 = styled.text`
font-size: 18px;
color: ${({theme}) => theme.colors.shape};
font-family: 'Barlow', sans-serif;

`;

export const Button = styled.div`
cursor: pointer;
background-color: ${({theme}) => theme.colors.shape};
height: 215px;
width: 215px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin: 0px 165px;
`;

export const ButtonText = styled.text`
font-size: 50px;
font-family: 'Bellefair', serif;
`;
