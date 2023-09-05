import StoryCard from "./StoryCard";
import Grid from '@mui/material/Grid';
import {NavLink} from 'react-router-dom'

export default function StoryCardGrid({storyCards}){


    // <NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
    return(
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <NavLink to={"portfolio/"+storyCards.first.title.replace(/\s+/g, '-').toLowerCase()} style={{ textDecoration: 'none' }}>
                    <StoryCard title={storyCards.first.title} intro={storyCards.first.intro} img_link={storyCards.first.img_link}/>
                </NavLink>
            </Grid>
            <Grid item xs={4}>
                <NavLink to={"portfolio/"+storyCards.second.title.replace(/\s+/g, '-').toLowerCase()} style={{ textDecoration: 'none' }}>
                    <StoryCard title={storyCards.second.title} intro={storyCards.second.intro} img_link={storyCards.second.img_link}/>
                </NavLink>
            </Grid>
            <Grid item xs={4}>
            <NavLink to={"portfolio/"+storyCards.third.title.replace(/\s+/g, '-').toLowerCase()} style={{ textDecoration: 'none' }}>
                <StoryCard title={storyCards.third.title} intro={storyCards.third.intro} img_link={storyCards.third.img_link}/>
            </NavLink>
            </Grid>
        </Grid>
    )

}