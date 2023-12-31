import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Footer from '../components/Footer';
import Coffee from "../components/Coffee";


function StoryPage() {
    const { story } = useParams();
    const [storyData, setStoryData] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/portfolio/${story}`)
            .then(response => response.json())
            .then(data => setStoryData(data))
            .catch(error => console.error('Error fetching story data', error));

    }, [story]);

    if (!storyData) {
        return <div>Loading</div>
    }

    return (
        <div>
            <NavBar />
            <Grid style={{marginTop:"5vh"}} container>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} >
                    <h1 style={{ fontFamily: "TravelingTypewriter" }}>{storyData.title}</h1>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} >
                    <img src={`${import.meta.env.VITE_API_URL}/public/${storyData.background_img}`} alt={storyData.title} style={{ height: "60vh" }} />
                </Grid>
                <Grid item xs={12} marginX={"20%"} marginTop={"1%"} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} >
                    <p style={{ fontFamily: "Lato" }}>{storyData.intro_text}</p>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} >
                    <Link href={storyData.link} style={{ fontFamily: "Lato" }}>Read more</Link>
                </Grid>
                <Grid item xs={12} marginX={"20%"} marginTop={"1%"} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} >
                    <p style={{ fontFamily: "Lato" }}>If you like this story, you can <Coffee/></p>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default StoryPage;