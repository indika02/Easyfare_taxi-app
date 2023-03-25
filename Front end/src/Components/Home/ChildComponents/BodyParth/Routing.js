import React, { useState } from 'react';
import { Box, Paper, InputBase, Chip, Button, Grid, Stack, Divider, Typography, Avatar, Rating, styled } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';

export default function MyBooking() {
    const RoutingDetails = [{ Avatar: "https://www.pngarts.com/files/5/Cartoon-Avatar-Transparent.png", Name: 'kamal', Discription: 'asdfsfsd', Phone: '07656', Vehicle: 'Car', Remaining_Seats: '3', Price: '34', Route: 'S To A' },
    { Avatar: "https://www.fivesquid.com/pics/t2/1504191094-74048-1-1.jpg", Name: 'asd', Discription: 'asdfsfsd', Phone: '07656', Vehicle: 'Car', Remaining_Seats: '1', Price: '34', Route: ' Colombo To Kurunegala' },
    { Avatar: "https://www.fivesquid.com/pics/t2/1504191094-74048-1-1.jpg", Name: 'asd', Discription: 'asdfsfsd', Phone: '07656', Vehicle: 'Car', Remaining_Seats: '1', Price: '34', Route: 'S To A' },
    { Avatar: "https://www.fivesquid.com/pics/t2/1504191094-74048-1-1.jpg", Name: 'asd', Discription: 'asdfsfsd', Phone: '07656', Vehicle: 'Car', Remaining_Seats: '1', Price: '34', Route: ' haputhale To Kurunegala' },
    { Avatar: "https://www.fivesquid.com/pics/t2/1504191094-74048-1-1.jpg", Name: 'asd', Discription: 'asdfsfsd', Phone: '07656', Vehicle: 'Car', Remaining_Seats: '1', Price: '34', Route: 'S To A' }]

    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    function RatingStars() {
        const StyledRating = styled(Rating)({
            '& .MuiRating-iconFilled': {
              color: '#000000',
            },
            '& .MuiRating-iconHover': {
              color: '#000000',
            },
          });
        return (
            <div>
                <StyledRating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
            </div>
        )
    }


    const [SearchTerms, setSearchTerms] = useState("");

    const renderCard = (val, index) => {        
        return (
            <Box sx={{ width: '95%', maxWidth: 360, bgcolor: 'rgb(251, 192, 45)', borderRadius: 10, m: 1 }} className="container">
                <Box sx={{ my: 1, mx: 1, p: 2 }}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h5" component="div">
                                {val.Route}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant="h6" component="div">
                                $4.50
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography color="text.secondary" variant="body2">
                        Discription Discription Discription Discription Discription Discription v Discription
                    </Typography>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ m: 2 }}>
                    <Typography gutterBottom variant="body1">
                        Your Driver
                    </Typography>
                    <Stack direction='column' spacing={1}>
                        <Chip
                            avatar={<Avatar alt="Natacha" src={val.Avatar} ></Avatar>}
                            label={val.Name}
                            variant="filled"
                        />
                        <Chip
                            avatar={<PhoneIcon />}
                            label={val.Phone}
                            variant="filled"
                        />
                        <Chip
                            avatar={<DirectionsCarIcon />}
                            label={val.Vehicle}
                            variant="filled"
                        />
                        <Chip
                            avatar={<AirlineSeatReclineExtraIcon />}
                            label={val.Remaining_Seats}
                            varicant="filled"
                        />
                        <Chip
                            component={RatingStars}
                            avatar={<AirlineSeatReclineExtraIcon />}
                            variant="filled"
                        />
                    </Stack>
                </Box>
                <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                    <Button sx={{color:'#000000'}}>Add to cart</Button>
                </Box>
            </Box>
        );
    }
    return (
        <div>
            <Box
                sx={{
                    textAlign: 'center',
                    marginTop: "70px",
                    width: '100%',
                    height: 600,
                }}
            >
                <h1>Routings</h1>
                <Box sx={{ width: '100%', display: { md: 'grid', sm: 'block' } }}>
                    <div>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search For Routing"
                            inputProps={{ 'aria-label': 'Search For Routing' }}
                            onChange={(e) => { setSearchTerms(e.target.value) }}
                        />
                        <IconButton sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> </div>
                </Box>  


                <Box sx={{ position: 'absolute', width: '100%', display: 'grid', gridTemplateColumns: { lg: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' } }}>
                    {RoutingDetails.filter((val) => {
                        if (SearchTerms == "") {
                            return val
                        }
                        else if (val.Route.toLowerCase().includes(SearchTerms.toLowerCase())) {
                            return val
                        }                        
                    }).map(renderCard)}
                </Box>
            </Box>
        </div>
    )
}