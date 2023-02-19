import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';

const DrawerComp = ({ openDrawer, setOpenDrawer }) => {

  const navigate = useNavigate()

    let list = [
      {
        name: 'About',
        icon: <InfoIcon />,
        url: '/about'
      },
      {
        name: 'Book',
        icon: <AddCircleIcon />
      },
      {
        name: 'Refer',
        icon: <PersonAddIcon />
      }
    ]

    return (
      <Drawer
        anchor={'right'}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          //onClick={toggleDrawer(anchor, false)}
          //onKeyDown={toggleDrawer(anchor, false)}
        >
          <Button color="secondary" onClick={() => setOpenDrawer(false)} variant='outlined' sx={{ marginX: '0.5rem', marginY: '0.6rem' }}>
            <CloseIcon sx={{ marginRight: '0.5rem' }} /> Close
          </Button>
          <List sx={{ marginTop: '1rem', color: 'green' }}>

            {
              list.map(value =>
                <ListItem disablePadding onClick={() => {
                  setOpenDrawer(false)
                  navigate(value.url)
                }}>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: 'green' }}>
                      {value.icon}
                    </ListItemIcon>
                    <ListItemText primary={value.name} />
                  </ListItemButton>
                </ListItem> 
              )
            }                                    
          </List>      
        </Box>
      </Drawer>
    )
}

export default DrawerComp