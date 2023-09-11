import StoryCard from "./StoryCard";
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';


export default function StoryCardSnapshot({ storyCards }) {
    return (
        <Grid container spacing={2}>
            {storyCards.map((storyCard, index) => (
                <Grid item xs={4} key={index}>
                    <NavLink
                        to={"portfolio/" + storyCard.title.replace(/\s+/g, '-').toLowerCase()}
                        style={{ textDecoration: 'none' }}
                    >
                        <StoryCard
                            title={storyCard.title}
                            intro={storyCard.intro_text}
                            img_link={`${import.meta.env.VITE_API_URL}/public/${storyCard.background_img}`}
                        />
                    </NavLink>
                </Grid>
            ))}
        </Grid>
    );
}