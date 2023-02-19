import { Grid, Typography } from '@mui/material'
import PooTripsAbout1 from '../images/PooTripsAbout1.jpg'
import PooTripsAbout2 from '../images/PooTripsAbout2.jpg'
import PooTripsAbout3 from '../images/PooTripsAbout3.jpg'
import PooTripsAbout4 from '../images/PooTripsAbout4.jpg'
import PooTripsAbout5 from '../images/PooTripsAbout5.jpg'
import PooTripsAbout6 from '../images/PooTripsAbout6.jpg'

const About = () => {
    return (
        <Grid container sx={{ marginTop: '5rem' }} spacing={1}>
            {/* <Grid item sx={{ marginX: '1rem' }}>
                <Typography
                    variant='h2'
                >
                    Poo Trips and Events
                </Typography>
            </Grid>            */}
            <Grid item sx={{ marginX: '1rem' }}>
                <img src={PooTripsAbout1} class="img-fluid" alt="Responsive image"></img>
            </Grid>    
            <Grid item sx={{ marginX: '1rem' }}>
                <img src={PooTripsAbout2} class="img-fluid" alt="Responsive image"></img>
            </Grid>
            <Grid item sx={{ marginX: '1rem' }}>
                <img src={PooTripsAbout3} class="img-fluid" alt="Responsive image"></img>
            </Grid>        
            <Grid item sx={{ marginX: '1rem' }}>
                <img src={PooTripsAbout4} class="img-fluid" alt="Responsive image"></img>
            </Grid>
            <Grid item sx={{ marginX: '1rem' }}>
                <img src={PooTripsAbout5} class="img-fluid" alt="Responsive image"></img>
            </Grid>
            <Grid item sx={{ marginX: '1rem' }}>
                <img src={PooTripsAbout6} class="img-fluid" alt="Responsive image"></img>
            </Grid>
        </Grid>
        
    )
}

export default About