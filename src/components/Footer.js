import { Typography, Grid } from '@mui/material';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Grid id='footer' sx={{ marginTop: '2rem' }}>
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"            
            sx={{
                background: 'grey',
                fontWeight: 900,
                padding: '1rem'
            }}
        >
        {new Date().getFullYear()} - Website Created by
        <Typography
            sx={{
                color: '#02bf3e',           
                fontSize: '1.5rem',
                fontWeight: 700
            }}
        >
            Sandesh
        </Typography>{' '}  
        Mobile: 8861615530<br />
        Email: <a href='mailto:sandeshkumar555dreams@gmail.com' style={{ color: 'black' }}>sandeshkumar555dreams@gmail.com</a>
        </Typography>
    </Grid>
  );
}

export default Footer
