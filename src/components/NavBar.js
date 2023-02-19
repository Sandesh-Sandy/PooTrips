import { Box, AppBar, Toolbar, Typography, IconButton, CssBaseline, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import PooLogo from '../images/poologo.svg'

const NavBar = ({ setOpenDrawer }) => {

    const navigate = useNavigate()
    return (        
        <AppBar position="fixed" sx={{ background: '#09bd51', width: '100%' }}>
            <CssBaseline />
            <Toolbar variant="dense">  
                <Button onClick={() => navigate('/')}>
                    <img src={PooLogo} height='40rem' width='40rem' />        
                    <Typography variant="h6" color="inherit" component="div" sx={{ fontWeight: 900, color: 'white', marginLeft: '1rem' }}>
                         Poo Trips
                    </Typography>
                </Button>
                <IconButton edge="end" color="inherit" aria-label="menu" sx={{ ml: 'auto' }} onClick={() => setOpenDrawer(true)}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar