import styled from 'styled-components';
import BackgroundImg from '../../global/assets/crew/background-crew-desktop.jpg'

export const Container = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  background: url(${BackgroundImg}) ;
  background-size: cover;
`;

 export const Content = styled.div`
 
 `;

 export const Title = styled.text`
 color: ${({theme}) => theme.colors.shape};
 margin-bottom: 3%;
 font-family: 'Barlow Condensed', sans-serif;
 font-size: 28px;
 margin-bottom: 10%;
 letter-spacing: 4.725px;
 `;

 export const PersonDiv = styled.div`
 display: flex;
 flex-direction: row;
 margin-top: 2.7%;
 `;

 export const InfoDiv = styled.div`
 display: flex;
 flex-direction: column;
 margin-left: 10%;
 margin-top: 1%;

 `;

 export const Office = styled.text`
 color: ${({theme}) => theme.colors.shape};
 font-size: 32px;
 font-family: 'Bellefair', serif;
 `;

 export const Name = styled.text`
 color: ${({theme}) => theme.colors.shape};
 font-size: 56px;
 font-family: 'Bellefair', serif;
 margin-top: 3%;
 `;

 export const Bio = styled.text`
 color: ${({theme}) => theme.colors.shape};
 font-size: 18px;
 width: 70%;
 font-family: 'Barlow', sans-serif;
 margin-top: 3%;
 `;

 export const Buttons = styled.div`
 display: flex;
 flex-direction: row;
 margin-top: 8%;
 `;

 export const Button = styled.div`
 cursor: pointer;
 height: 15px;
 width: 15px;
 background-color: ${({theme}) => theme.colors.text};
 border-radius: 50%;
 margin-right: 3%;

 transition: 0.2s;

 :hover{
    background-color: ${({theme}) => theme.colors.shape};   
 }
 `;

 export const PersonImage = styled.img`
 width: 450px;
 height: 520px;
 margin-right: 10%;

 @media(min-height: 750px){
  width: 710px;
  height: 780px
 }
 `;
 