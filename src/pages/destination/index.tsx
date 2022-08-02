import React, { useEffect, useState } from "react";
import { Header } from "../../global/components/Header";
import moon from '../../global/assets/destination/image-moon.png'
import mars from '../../global/assets/destination/image-mars.png'
import europa from '../../global/assets/destination/image-europa.png'
import titan from '../../global/assets/destination/image-titan.png'


import { 
    Container,
    Content,
    PlanetDiv,
    Title,
    PlanetImage,
    InfoDiv,
    Planets,
    ButtonPlanet,
    PlanetName,
    PlanetText,
    LineDiv,
    DistanceDiv,
    TitleD,
    Distance,
    TimeDiv,
    TitleT,
    Time,
    DataDiv
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



export function Destination(){
    const [jsonData, setJsonData] = useState<IJson[]>([])
    const [id, setId] = useState(0)
    const [photo, setPhoto] = useState('')

    useEffect(() => {
    if(id === 0){
        setPhoto(moon)
    }else if(id === 1){
        setPhoto(mars)
    }else if(id === 2){
        setPhoto(europa)
    }else if(id === 3){
        setPhoto(titan)
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

    function handleSelectPlanet(id: number){

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
 <PlanetDiv>
     <Title>01 PICK YOUR DESTINATION</Title>
     <PlanetImage 
     src={photo}
     />
 </PlanetDiv>
 <InfoDiv>
     <Planets>
         <ButtonPlanet
         onActive={id === 0}
         onClick={() => handleSelectPlanet(0)}
         >MOON</ButtonPlanet>
         <ButtonPlanet
         onActive={id === 1}
         onClick={() => handleSelectPlanet(1)}
         >MARS</ButtonPlanet>
         <ButtonPlanet
         onActive={id === 2}
         onClick={() => handleSelectPlanet(2)}
         >EUROPA</ButtonPlanet>
         <ButtonPlanet
         onActive={id === 3}
         onClick={() => handleSelectPlanet(3)}>TITAN</ButtonPlanet>
     </Planets>
     <PlanetName>{item.destinations[id].name}</PlanetName>
     <PlanetText>
       {item.destinations[id].description}
         </PlanetText>
     <LineDiv/>
     <DataDiv>
         <DistanceDiv>
             <TitleD>AVG. DISTANCE</TitleD>
             <Distance>{item.destinations[id].distance}</Distance>
         </DistanceDiv>
         <TimeDiv>
             <TitleT>Est. travel time</TitleT>
             <Time>{item.destinations[id].travel}</Time>
         </TimeDiv>
     </DataDiv>    
 </InfoDiv>
</Content>))
       }
             </Container>
    );
}