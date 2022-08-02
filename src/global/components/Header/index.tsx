import React, { useState } from "react";
import { useLocation,} from "react-router-dom";
import { 
    Container,
    Content,
    Icon,
    LineDiv,
    NavigationDiv,
    NavigationButton,
    ButtonDiv
 } from "./styles";



export function Header(){

return(
<Container>
    <Content>
        <Icon/>
        <LineDiv/>
        <NavigationDiv>
            <ButtonDiv
            isActive={useLocation().pathname === '/'}
            >
            <NavigationButton      
            to='/'
   >
                00 HOME
            </NavigationButton>
            </ButtonDiv>
            <ButtonDiv
             isActive={useLocation().pathname === '/destination'}
            >
            <NavigationButton      
          to='/destination'
            
            >
                01 DESTINATION
            </NavigationButton>
            </ButtonDiv>
            <ButtonDiv
            isActive={useLocation().pathname === '/crew'}
            >
            <NavigationButton            
            to='/crew'
            >
                02 CREW
            </NavigationButton>
            </ButtonDiv>
            <ButtonDiv
             isActive={useLocation().pathname === '/technology'}
            >
            <NavigationButton      
            to='/technology'
            >
                03 TECHNOLOGY
            </NavigationButton>
            </ButtonDiv>
        </NavigationDiv>
    </Content>  
</Container>



)
}