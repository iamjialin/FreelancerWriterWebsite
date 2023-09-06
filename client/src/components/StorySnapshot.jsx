import StoryCard from "./StoryCard";
import Grid from '@mui/material/Grid';
import {NavLink} from 'react-router-dom'

export default function StoryCardSnapshot({storyCards}){


    // <NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
    return(
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <NavLink to={"portfolio/"+storyCards[0].title.replace(/\s+/g, '-').toLowerCase()} style={{ textDecoration: 'none' }}>
                    <StoryCard title={storyCards[0].title} intro={storyCards.first.intro} img_link={storyCards.first.img_link}/>
                </NavLink>
            </Grid>
            <Grid item xs={4}>
                <NavLink to={"portfolio/"+storyCards[1].title.replace(/\s+/g, '-').toLowerCase()} style={{ textDecoration: 'none' }}>
                    <StoryCard title={storyCards[1].title} intro={storyCards.second.intro} img_link={storyCards.second.img_link}/>
                </NavLink>
            </Grid>
            <Grid item xs={4}>
            <NavLink to={"portfolio/"+storyCards[2].title.replace(/\s+/g, '-').toLowerCase()} style={{ textDecoration: 'none' }}>
                <StoryCard title={storyCards[2].title} intro={storyCards.third.intro} img_link={storyCards.third.img_link}/>
            </NavLink>
            </Grid>
        </Grid>
    )

}