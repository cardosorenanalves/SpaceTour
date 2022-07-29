import React, { useEffect, useState } from "react";
import { Header } from "../../global/components/Header";
import mark from '../../global/assets/crew/image-mark-shuttleworth.png'
import anousheh from '../../global/assets/crew/image-anousheh-ansari.png'
import douglas from '../../global/assets/crew/image-douglas-hurley.png'
import victor from '../../global/assets/crew/image-victor-glover.png'


import { 
    Container,
    Content,
    Title,
    PersonDiv,
    InfoDiv,
    Office,
    Name,
    Bio,
    Buttons,
    Button,
    PersonImage,
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

export function Crew(){

    const [jsonData, setJsonData] = useState<IJson[]>([])
    const [id, setId] = useState(0)
    const [photo, setPhoto] = useState('')

    useEffect(() => {
    if(id === 0){
        setPhoto(douglas)
    }else if(id === 1){
        setPhoto(mark)
    }else if(id === 2){
        setPhoto(victor)
    }else if(id === 3){
        setPhoto(anousheh)
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
                <PersonDiv>
                    <InfoDiv>
                    <Title>02 MEET YOUR CREW</Title>
                        <Office>{item.crew[id].role}</Office>
                        <Name>{item.crew[id].name}</Name>
                        <Bio>
                        {item.crew[id].bio}
                               </Bio>
                        <Buttons>
                            <Button
                            onClick={() => handleSelectPerson(0)}
                            />
                            <Button
                            onClick={() => handleSelectPerson(1)}
                            />
                            <Button
                            onClick={() => handleSelectPerson(2)}
                            />
                            <Button
                            onClick={() => handleSelectPerson(3)}
                            />
                        </Buttons>
                    </InfoDiv>
                    <PersonImage 
                    src={photo}
                    />
                </PersonDiv>
            </Content>
            ))}
        </Container>
    )
}