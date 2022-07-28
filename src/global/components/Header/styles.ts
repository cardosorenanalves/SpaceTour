import styled from "styled-components";

import IconSvg from '../../assets/svg/Group2.svg'

interface BProps{
    active: boolean;
}

export const Container = styled.div`
position: relative;

width: 100%;
margin-bottom: 90px;
padding-top: 2%;
`;

export const Content = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const Icon = styled.div`
display: flex;
width: 48px;
height: 48px;
background-image:url(${IconSvg});
margin-left: 4%;
`;

export const LineDiv = styled.div`
position: absolute;
width: 30%;
height: 2px;
background-color: ${({theme}) => theme.colors.title};
margin-left: 15%;
z-index: 2;

`;

export const NavigationDiv = styled.div`
width: 50%;
height: 80px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0px 3%;
border-radius: 5px;
background: rgba(255, 255, 255, 0.04);

backdrop-filter: blur(95.5485px);
`;

export const NavigationButton = styled.div<BProps>`
cursor: pointer;
color: ${({theme}) => theme.colors.shape};

&:hover{
        color: ${({theme}) => theme.colors.text};
       }

&.active{
    color: ${({theme}) => theme.colors.shape};
    font-weight: bold;
            }

            &.active::after{
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 100%;
                position: absolute;
                bottom: 1px;
                left: 0;
                background: var(--yellow-500);

            }
`;