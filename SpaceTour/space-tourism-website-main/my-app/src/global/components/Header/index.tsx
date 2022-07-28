import React from "react";
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
            <NavigationButton>
                00 HOME
            </NavigationButton>
            <NavigationButton>
                01 DESTINATION
            </NavigationButton>
            <NavigationButton>
                02 CREW
            </NavigationButton>
            <NavigationButton>
                03 TECHNOLOGY
            </NavigationButton>
        </NavigationDiv>
    </Content>  
</Container>



)
}