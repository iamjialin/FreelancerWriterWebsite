import StoryCard from "./StoryCard";
import Grid from '@mui/material/Grid';

export default function StoryCardGrid({storyCards}){

    return(
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <StoryCard title={storyCards.first.title} intro={storyCards.first.intro} img_link={storyCards.first.img_link}/>
            </Grid>
            <Grid item xs={4}>
                <StoryCard title={storyCards.second.title} intro={storyCards.second.intro} img_link={storyCards.second.img_link}/>
            </Grid>
            <Grid item xs={4}>
                <StoryCard title={storyCards.third.title} intro={storyCards.third.intro} img_link={storyCards.third.img_link}/>
            </Grid>
        </Grid>
    )

}