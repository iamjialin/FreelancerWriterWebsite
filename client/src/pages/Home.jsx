import NavBar from "../components/NavBar";
import HomeBackground from "../components/HomeBackground";
import StoryCard from "../components/StoryCard";
import StoryCardGrid from "../components/StoryCardGrid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom'

export default function Home(){

    let storyCards = {
        first:{
            title: "All Sinners Burn",
            intro: "In which a bent out of shape Nick is forced to contend with a serial killer known as the Devil of Del Rio; Ray the demon chronicles the youth's ruthless descent into the shattered necropolis of the modern world.",
            img_link: "./story_card1.jpeg"
        },
        second:{
            title: "Blood and Shadows",
            intro: "A multidimensional entity with a penchant for flesh and absolute power terrorizes London, but Mordred remains oblivious; Silas and Benedict grapple with their dual, contradicting natures.",
            img_link:"./story_card2.jpg"
        },
        third:{
            title:"Mirror Mirror",
            intro: "A twist of fate causes Benedict to inhabit the body of a man who causes death and destruction whenever he goes; Mordred is ecstatic when he finds out that his school has been turned into a casino.",
            img_link:"./story_card3.jpg"
        }
    };


    return(
        <>
        <NavBar/>
        <HomeBackground />

        <Box display="flex" justifyContent="center" width="100%">
            <h1>Check out my cool stories</h1>
        </Box>

        
        <Box display="flex" justifyContent="center" width="100%" >
            <Box width="70vw" >
                <StoryCardGrid storyCards={storyCards} />
            </Box>
        </Box>

        <Box display="flex" justifyContent="center" width="100%" alignItems={"center"} height={"100px"}>
            <Button color="inherit"><NavLink to="/portfolio" style={{ textDecoration: 'none' }}>See More</NavLink></Button>
        </Box>

        
        </>
        
    )
}
