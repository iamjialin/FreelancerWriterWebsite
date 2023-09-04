import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';


function StoryPage(){
    const {story} = useParams();
    const [storyData, setStoryData] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:3000/portfolio/${story}`)
            .then(response=>response.json())
            .then(data => setStoryData(data))
            .catch(error=> console.error('Error fetching story data', error));

    }, [story]);

    if (!storyData){
        return <div>Loading</div>
    }
    return (
        <div>
            <h1>{storyData.title}</h1>
            <img src={storyData.background_img} alt={storyData.title} />
            <p>{storyData.intro_text}</p>
            <a href={storyData.link}>Read more</a>
        </div>
    )


}

export default StoryPage;