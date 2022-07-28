import styled from 'styled-components';
 
import BackgroundImg from '../../global/assets/home/background-home-desktop.jpg'

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
align-items: center;
padding-top: 6%;

@media (min-width: 1400px ){
  padding-top: 14%;
  margin: 0 3%;
}

@media (max-width: 1200px){
  flex-direction: column;
  
}
`;

export const TextDiv = styled.div`
display: flex;
flex-direction: column;
width: 450px;
height: 382px;
margin: 0px 8%;
`;

export const H2 = styled.text`
font-size: 18px;
color: ${({theme}) => theme.colors.shape};
font-family: 'Barlow Condensed', sans-serif;
@media (max-width: 1200px){
  font-size: 16px;
  
}
`;

export const H1 = styled.text`
font-size: 150px;
color: ${({theme}) => theme.colors.shape};
font-family: 'Bellefair', serif;

@media (max-width: 1200px){
  font-size: 100px;
  
}
`;

export const H4 = styled.text`
font-size: 18px;
color: ${({theme}) => theme.colors.shape};
font-family: 'Barlow', sans-serif;

@media (max-width: 1200px){
  font-size: 16px;
  
}
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

@media (max-width: 1200px){
  height: 170px;
  width: 170px;
  
}
`;

export const ButtonText = styled.text`
font-size: 50px;
font-family: 'Bellefair', serif;
`;
