import { Box, Typography, Grid, Avatar } from "@mui/material";
import { cochinTripTravellers } from "./CochinTripList"

const CochinTrip = () => {
    return (
        <Box
            className="radial"                             
        >
            <Typography
                variant='h3'
                sx={{ marginTop: '2rem', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}
            >
                Cochin Trip - List of Travellers
            </Typography>
            <Grid container spacing={5}>
            {cochinTripTravellers.map((v, index) => (
                <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ display: "flex", justifyContent: "left" }}
                >
                <Box sx={{ display: "flex", padding: "1rem" }}>
                    <Typography
                    variant="h2"
                    sx={{
                        marginRight: { xs: "1rem" },
                        fontWeight: 900,
                        color: "white"
                    }}
                    >
                    {index + 1}
                    </Typography>
                    <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "left",
                        alignItems: "left"
                    }}
                    >
                    <Avatar
                        src={v.imageURL}
                        sx={{ width: "10rem", height: "10rem" }}
                    />
                    <Typography
                        variant="h4"
                        sx={{
                        textAlign: "center",
                        fontWeight: 900,
                        color: "white"
                        }}
                    >
                        {v.name}
                    </Typography>
                    </Box>
                </Box>
                </Grid>
            ))}
            </Grid>
        </Box>
    )
}

export default CochinTrip