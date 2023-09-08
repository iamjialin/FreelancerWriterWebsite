import NavBar from "../components/NavBar";
import StoryListing from "../components/StoryListing";
import PortfolioBackground from "../components/PortfolioBackground";
import { Box } from "@mui/material";

export default function Portfolio(){
    return(
        <>
        <NavBar/>


        <Box display="flex" justifyContent="center" width="100%" >
            <StoryListing />
        </Box>
        </>
    )
}

