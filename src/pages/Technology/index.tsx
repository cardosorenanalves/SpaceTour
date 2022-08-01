import React, { useEffect, useState } from "react";
import { Header } from "../../global/components/Header";
import launch from '../../global/assets/technology/image-launch-vehicle-portrait.jpg'
import space from '../../global/assets/technology/image-spaceport-portrait.jpg'
import capsule from '../../global/assets/technology/image-space-capsule-portrait.jpg'

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
    TextButton,
    TitleDiv,
    TitleAndInfo,
    TextDiv
} from "./styles";

interface ImagesTech{
    portrait: string;
    landscape: string;
}

interface IImages{
    png: string;
    webp: string;

}

interface IDestinations{
    name: string;
    images: IImages;
    description: string;
    distance: string;
    travel: string;
}

interface ICrew{
    name: string;
    images: IImages;
    role: string;
    bio: string;
}

interface ITechnology{
    name: string;
    images: ImagesTech
    description: string;
}

interface IJson{
    destinations : IDestinations[];
    crew: ICrew[];
    technology: ITechnology[];
}




export function Technology(){
    const [jsonData, setJsonData] = useState<IJson[]>([])
    const [id, setId] = useState(0)
    const [photo, setPhoto] = useState('')

    useEffect(() => {
    if(id === 0){
        setPhoto(launch)
    }else if(id === 1){
        setPhoto(space)
    }else if(id === 2){
        setPhoto(capsule)
    }
    },[id])

    useEffect(() => {
        getData()
    },[])

    function getData(){
        fetch('./data.json',{
            headers:{
                Accept: 'application/json'
            }
        }).then(res => res.json())
          .then(res => setJsonData([res]));
          console.log(jsonData)

    }

    function handleSelectPerson(id: number){

        if(id === 0){
            setId(id)
        } else if(id === 1){
            setId(id)
        } else if(id === 2){
            setId(id)
        } else if(id === 3){
            setId(id)
        }
    }

    return(
        <Container>
            <Header/>
            {jsonData?.map((item) =>(
            <Content>
           
          <TitleAndInfo>
            <TitleDiv>
                    <Title>03 SPACE LAUNCH 101</Title>
                    </TitleDiv>


               <TextDiv>
                <Buttons>
                

                    <Button
                    onClick={() => handleSelectPerson(0)}
                    onActive={id === 0}
                    >
                        <TextButton
                        onActive={id === 0}
                        >1</TextButton>
                    </Button>
                    <Button
                    onClick={() => handleSelectPerson(1)}
                    onActive={id === 1}
                    >
                        <TextButton
                         onActive={id === 1}
                        >2</TextButton>
                        </Button>
                    <Button
                    onClick={() => handleSelectPerson(2)}
                    onActive={id === 2}
                    >
                        <TextButton
                         onActive={id === 2}
                        >3</TextButton>
                    </Button>
                </Buttons>
                
                <InfoDiv>
                    
                    <InfoTitle>THE TERMINOLOGY…</InfoTitle>
                    <VehicleName>{item.technology[id].name}</VehicleName>
                    <Description>
                    {item.technology[id].description}
                    </Description>
                </InfoDiv>
                </TextDiv>
                </TitleAndInfo>
                <VehicleImage
                src={photo}
                />
            </Content>
            ))}
        </Container>
    )
} 