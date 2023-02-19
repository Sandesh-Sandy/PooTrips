import { Typography, Box, Grid, Button } from "@mui/material"
import { Slide } from 'react-slideshow-image'
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Cochin1 from '../images/Cochin1.jpg'
import Cochin2 from '../images/Cochin2.jpg'
import Cruise from '../images/CruiseParty.jpg'
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Sandesh from '../images/Sandesh.jpg'
import Dandeli from '../images/Dandeli.jfif'
import Dandeli3 from '../images/Dandeli3.jfif'
import Dandeli2 from '../images/Dandeli2.jfif'
import DandeliPoo1 from '../images/DandeliPoo1.jpg'
import DandeliPoo2 from '../images/DandeliPoo2.jpg'
import DandeliPoo3 from '../images/DandeliPoo3.jpg'
import Poorvik from '../images/Poorvik.jpeg'
import Anand from '../images/Anand.jpeg'
import Sharu from '../images/Sharu.jpeg'
import Ravi from '../images/Ravi.jpg'
import Carousel from "react-bootstrap/Carousel";
import { cochinTripTravellers } from "./CochinTripList";

const Dashboard = () => {    

    const navigate = useNavigate()

    return (                   
        <Grid
            sx={{ width: '100%', marginTop: '2rem' }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid container sx={{ marginTop: '2rem' }} spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 900, marginLeft: '3rem' }}

                        >
                            Upcoming Trip - Cochin 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <AvatarGroup max={6}>
                                
                                <Avatar sx={{ height: 60, width: 60 }} alt="Travis Howard" src={Poorvik} />
                                <Avatar sx={{ height: 60, width: 60 }} alt="Remy Sharp" src={Sandesh} />
                                <Avatar sx={{ height: 60, width: 60 }} alt="Remy Sharp" src={Sharu} />
                                <Avatar sx={{ height: 60, width: 60 }} alt="Remy Sharp" src={Anand} />
                                <Avatar sx={{ height: 60, width: 60 }} alt="Remy Sharp" src={Ravi} />
                                {
                                    new Array(cochinTripTravellers.length - 5).fill(0).map(_ => <Avatar />
                                    )
                                }
                            </AvatarGroup>
                            <Button variant="contained" sx={{ marginLeft: '1rem', height: '2rem' }} onClick={() => navigate('/cochin_trip_travellers')}>View All</Button>
                        </Typography> 
                    </Grid>
                </Grid>   
            </Box>               
              
            <Box style={{ margin: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
                <Carousel>
                    <Carousel.Item>
                        <img class="img-fluid" src={Cruise} alt="First slide" />  
                    </Carousel.Item>
                    <Carousel.Item>
                        <img class="img-fluid" src={Cochin1} alt="First slide" />  
                    </Carousel.Item>
                    <Carousel.Item>
                        <img class="img-fluid" src={Cochin2} alt="First slide" />  
                    </Carousel.Item>
                                             
                </Carousel>  
            </Box> 

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid container sx={{ marginTop: '2rem' }} spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 900, marginLeft: '3rem' }}

                        >
                            Next Trip - Dandeli 
                        </Typography>
                    </Grid>                   
                </Grid>   
            </Box> 

            <Box style={{ margin: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
                <Carousel>
                    <Carousel.Item>
                        <img class="img-fluid" src={DandeliPoo1} alt="First slide" />  
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={DandeliPoo2} alt="First slide" />  
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={DandeliPoo3} alt="First slide" />  
                    </Carousel.Item>                                            
                </Carousel>  
            </Box>           
                     
        </Grid>
    )
}

export default Dashboard