import React from "react";
import { Header } from "../../global/components/Header";
import { 
    Container,
    Content,
    H2,
    H1,
    H4,
    Button,
    TextDiv,
    ButtonText

} from "./styles";

export function Home(){
    return(
        <Container>
            <Header/>
            <Content>
                <TextDiv>
                    <H2>SO, YOU WANT TO TRAVEL TO</H2>
                    <H1>SPACE</H1>
                    <H4>
                        Let’s face it; if you want to go to space, you might as well 
                        genuinely go to outer space and not hover kind of on the edge of it.
                        Well sit back, and relax because we’ll give you a truly out of this world experience! 
                    </H4>
                </TextDiv>
                
                <Button>
                    <ButtonText>
                           Explore 
                    </ButtonText>
                </Button>
            </Content>

        </Container>
    )
}