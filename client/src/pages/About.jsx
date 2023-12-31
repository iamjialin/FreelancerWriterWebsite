import NavBar from "../components/NavBar";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Footer from "../components/Footer";

export default function About() {
    return (
        <>
            <NavBar />
            <Box display="flex" justifyContent="center" width="100%" fontFamily='TravelingTypewriter' marginTop={"5vh"} marginBottom={"20vh"}>
                <Grid container width={"60vw"} marginTop={"2%"} marginBottom={"6%"}>
                    <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} >
                        <h1>About Me</h1>
                    </Grid>
                    <Grid item md={4} marginRight={"5%"} >
                        <img src="/profile.jpg" className="profile" alt="" style={{ width: "100%" }} />

                    </Grid>
                    <Grid item md={7} fontFamily={"Lato"} fontSize={"20px"}>
                        <p>I am a freelance author and blog writer. I write cool stories about interdimensional deities, eldritch horrors, and the people that control them. While these darkly paranormal tales are works of fiction, they are rooted in the real and harrowing aspects of the human condition. </p>
                        <p>All stories are original creations and copyrighted. The pictures are found on the internet and belong to their creators. </p>
                        <p>For proofreading and article writing requests, contact me  <Link href="/contact">here</Link>.</p>
                        <p>Suscribe me at my personal blog <Link href="https://dreamcoders.wixsite.com/my-site">here</Link> to get my latest posts</p>
                    </Grid>
                </Grid>

            </Box>
            <Footer />
        </>
    )
}