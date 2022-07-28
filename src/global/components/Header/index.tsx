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
            <NavigationButton active={true}>
                00 HOME
            </NavigationButton>
            <NavigationButton active={false}>
                01 DESTINATION
            </NavigationButton>
            <NavigationButton active={false}>
                02 CREW
            </NavigationButton>
            <NavigationButton active={false}>
                03 TECHNOLOGY
            </NavigationButton>
        </NavigationDiv>
    </Content>  
</Container>



)
}