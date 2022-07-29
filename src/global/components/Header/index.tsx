import React, { useState } from "react";
import { 
    Container,
    Content,
    Icon,
    LineDiv,
    NavigationDiv,
    NavigationButton
 } from "./styles";


export function Header(){

return(
<Container>
    <Content>
        <Icon/>
        <LineDiv/>
        <NavigationDiv>
            <NavigationButton 
            to='/'
   >
                00 HOME
            </NavigationButton>
            <NavigationButton 
          to='/destination'
            
            >
                01 DESTINATION
            </NavigationButton>
            <NavigationButton 
            to='/crew'
            >
                02 CREW
            </NavigationButton>
            <NavigationButton
            to='/technology'
            >
                03 TECHNOLOGY
            </NavigationButton>
        </NavigationDiv>
    </Content>  
</Container>



)
}