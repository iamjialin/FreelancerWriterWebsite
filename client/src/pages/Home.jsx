import NavBar from "../components/NavBar";
import HomeBackground from "../components/HomeBackground";
import StorySnapshot from "../components/StorySnapshot"

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function Home() {

    const [storyCards, setStoryCards] = useState([])
    console.log('Fetching from URL:', `${import.meta.env.VITE_API_URL}/home`);
    const fetchStoryCards = () => fetch(`${import.meta.env.VITE_API_URL}/home`)
        .then(response => response.json())
        .then(data => { setStoryCards(data) })
        .catch(error => console.error('Error fetching story data', error));

    useEffect(() => { fetchStoryCards() }, [])

    if (storyCards.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <NavBar color={[53, 85, 32]} textColor='white'/>
            <HomeBackground />

            <Box display="flex" justifyContent="center" width="100%" fontFamily='TravelingTypewriter'>
                <h1>Check out my cool stories</h1>
            </Box>

            <Box display="flex" justifyContent="center" width="100%" marginTop={"1%"} >
                <Box width="80vw" >
                    <StorySnapshot storyCards={storyCards} />
                </Box>
            </Box>

            <Box display="flex" justifyContent="center" width="100%" alignItems={"center"} height={"100px"} marginTop={"1%"}>
                <Button color="success" component={Link} to="/portfolio" style={{ textTransform: "none", fontFamily: "Lato", fontSize: "20px", width: "160px", height: "60px" }}
                    sx={{ ':hover': { color: "white", backgroundColor: "green" } }} size="large" variant="outlined">See More</Button>
            </Box>
            <Footer />
        </>
    )
}
