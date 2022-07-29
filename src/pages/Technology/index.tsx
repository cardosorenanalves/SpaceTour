import React from "react";
import { Header } from "../../global/components/Header";
import launch from '../../global/assets/technology/image-launch-vehicle-portrait.jpg'

import { 
    Container,
    Content,
    Buttons,
    Button,
    InfoDiv,
    Title,
    InfoTitle,
    VehicleName,
    Description,
    VehicleImage,
    TextButton
} from "./styles";

export function Technology(){
    return(
        <Container>
            <Header/>
            <Content>
                <Buttons>
                <Title>03 SPACE LAUNCH 101</Title>

                    <Button>
                        <TextButton>1</TextButton>
                    </Button>
                    <Button>
                        <TextButton>2</TextButton>
                        </Button>
                    <Button>
                        <TextButton>3</TextButton>
                    </Button>
                </Buttons>
                
                <InfoDiv>
                
                    <InfoTitle>THE TERMINOLOGY…</InfoTitle>
                    <VehicleName>LAUNCH VEHICLE</VehicleName>
                    <Description>
                        A launch vehicle or carrier rocket is
                         a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                         it's quite an awe-inspiring sight on the launch pad!
                    </Description>
                </InfoDiv>
                <VehicleImage
                src={launch}
                />
            </Content>
        </Container>
    )
} 