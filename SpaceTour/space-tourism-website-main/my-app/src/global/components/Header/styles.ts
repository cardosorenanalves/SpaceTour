import styled from "styled-components";

import IconSvg from '../../assets/svg/Group2.svg'

export const Container = styled.div`
width: 100%;
margin: 0px 5%;
margin-bottom: 90px;
`;

export const Content = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const Icon = styled.div`
width: 48px;
height: 48px;
background-image:url(${IconSvg});
`;

export const LineDiv = styled.div`
width: 30%;
height: 2px;
background-color: ${({theme}) => theme.colors.title};

`;

export const NavigationDiv = styled.div`
width: 41%;
height: 93px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

padding: 0 10%;

backdrop-filter: blur(81.5485px);
`;

export const NavigationButton = styled.div`
color: ${({theme}) => theme.colors.shape};
`;