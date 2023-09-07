import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import "./css/StoryCard.css"


export default function StoryCard({title, intro, img_link}){
    return(
        <Card style={{height:"60vh"}} sx={{':hover': {boxShadow: 20}}}>
            <CardHeader titleTypographyProps={{fontFamily:"TravelingTypewriter"}} title={title} />

            <CardMedia
            component="img"
            style={{height:"50%"}}
            image={img_link}
            />
            <CardContent>
                <Typography fontFamily={'Lato'} color="text.secondary">{intro}</Typography>
            </CardContent>
        </Card>
    )
}