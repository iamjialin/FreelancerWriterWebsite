import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


export default function StoryCard({ title, intro, img_link }) {
    return (
        <Card style={{ height: "45vh", borderRadius: "2%" }} sx={{ ':hover': { boxShadow: 20 } }}>
            <CardHeader
                titleTypographyProps={{ fontFamily: "TravelingTypewriter" }}
                title={title}
            />
            <CardMedia
                component="img"
                style={{ height: "50%" }}
                image={img_link}
            />
            <CardContent>
                <Typography fontFamily={'Lato'} color="text.secondary">{intro}</Typography>
            </CardContent>
        </Card>
    )
}