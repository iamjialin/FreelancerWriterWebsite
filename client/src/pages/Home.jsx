import NavBar from "../components/NavBar";
import HomeBackground from "../components/HomeBackground";
import StoryCard from "../components/StoryCard";
import StorySnapshot from "../components/StorySnapshot"

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";

export default function Home(){

    const [storyCards, setStoryCards] = useState([])

    const fetchStoryCards = () => fetch("http://localhost:3000/home")
                                    .then(response=>response.json())
                                    .then(data=>{setStoryCards(data)})
                                    .catch(error => console.error('Error fetching story data', error));

    useEffect(()=>{fetchStoryCards()}, [])
    console.log(storyCards)
    if (storyCards.length === 0) {
        return <div>Loading...</div>;
    }

    return(
        <>
        <NavBar/>
        <HomeBackground />

        <Box display="flex" justifyContent="center" width="100%" fontFamily='TravelingTypewriter'>
            <h1>Check out my cool stories</h1>
        </Box>

        
        <Box display="flex" justifyContent="center" width="100%" >
            <Box width="70vw" >
                <StorySnapshot storyCards={storyCards} />
            </Box>
        </Box>

        <Box display="flex" justifyContent="center" width="100%" alignItems={"center"} height={"100px"}>
            <Button color="success" component={Link} to="/portfolio" style={{ textDecoration:'none'}}
            sx={{':hover': {color: "white", backgroundColor:"green"}}} size="large" variant="outlined">See More</Button>
        </Box>

        
        </>
        
    )
}
