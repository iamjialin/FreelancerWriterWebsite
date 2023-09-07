import StoryCard from "./StoryCard";
import Grid from '@mui/material/Grid';
import {NavLink} from 'react-router-dom';
import { useState, useEffect } from "react";

export default function StoryCardSnapshot() {


    const [storyCards, setStoryCards] = useState([])

    const fetchStoryCards = () => fetch("http://localhost:3000/portfolio")
                                    .then(response=>response.json())
                                    .then(data=>{setStoryCards(data)})
                                    .catch(error => console.error('Error fetching story data', error));

    useEffect(()=>{fetchStoryCards()}, [])

    if (storyCards.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <Grid container spacing={2} style={{width: "80vw"}}>
            {storyCards.map((storyCard, index) => (
                <Grid item xs={4} key={index}>
                    <NavLink 
                        to={storyCard.title.replace(/\s+/g, '-').toLowerCase()} 
                        style={{ textDecoration: 'none' }}
                    >
                        <StoryCard 
                            title={storyCard.title} 
                            intro={storyCard.intro_text} 
                            img_link={"http://localhost:3000/public" + storyCard.background_img} 
                        />
                    </NavLink>
                </Grid>
            ))}
        </Grid>
    );
}