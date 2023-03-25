import * as React from 'react';
import { Box, Rating, Chip, Button, Grid, Stack, Divider, Typography, Avatar, styled } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import StarIcon from '@mui/icons-material/Star';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function MyBooking() {
    const RoutingDetails = [{ Avatar: "https://www.pngarts.com/files/5/Cartoon-Avatar-Transparent.png", Name: 'kamal', Discription: 'asdfsfsd', Phone: '07656', Vehicle: 'Car', Remaining_Seats: '3', Price: '34', Route: 'S To A' },
    { Avatar: "https://www.fivesquid.com/pics/t2/1504191094-74048-1-1.jpg", Name: 'asd', Discription: 'asdfsfsd', Phone: '07656', Vehicle: 'Car', Remaining_Seats: '1', Price: '34', Route: 'S To A' },
    { Avatar: "https://www.fivesquid.com/pics/t2/1504191094-74048-1-1.jpg", Name: 'bg', Discription: 'asdfsfsd', Phone: '07656', Vehicle: 'Car', Remaining_Seats: '1', Price: '34', Route: 'S To A' },
    { Avatar: "https://www.fivesquid.com/pics/t2/1504191094-74048-1-1.jpg", Name: 'd', Discription: 'asdfsfsd', Phone: '07656', Vehicle: 'Car', Remaining_Seats: '1', Price: '34', Route: 'S To A' },
    { Avatar: "https://www.fivesquid.com/pics/t2/1504191094-74048-1-1.jpg", Name: 'h', Discription: 'asdfsfsd', Phone: '07656', Vehicle: 'Car', Remaining_Seats: '1', Price: '34', Route: 'S To A' }]


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

    const renderCard = (card, index) => {
        return (
            <SwiperSlide>
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgb(251, 192, 45)', borderRadius: 10 }}>
                    <Box sx={{ my: 3, mx: 2, p: 2 }}>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Typography gutterBottom variant="h5" component="div">
                                    Colombo To Kurunegala
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
                        <Typography gutterBottom variant="overline">
                            Your Driver
                        </Typography>
                        <Stack direction='column' spacing={1}>
                            <Chip
                                avatar={<Avatar alt="Natacha" src={card.Avatar} ></Avatar>}
                                label={card.Name}
                                variant="filled"
                            />
                            <Chip
                                avatar={<PhoneIcon />}
                                label={card.Phone}
                                variant="filled"
                            />
                            <Chip
                                avatar={<DirectionsCarIcon />}
                                label={card.Vehicle}
                                variant="filled"
                            />
                            <Chip
                                avatar={<AirlineSeatReclineExtraIcon />}
                                label={card.Remaining_Seats}
                                variant="filled"
                            />
                            <Chip
                                component={RatingStars}
                                avatar={<AirlineSeatReclineExtraIcon />}
                            />
                        </Stack>
                    </Box>
                    <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                        <Button sx={{color:'#000000'}}>Add to cart</Button>
                    </Box>
                </Box>
            </SwiperSlide>
        );
    }
    return (
        <div>
            <Box
                sx={{
                    textAlign: 'center',
                    marginTop: "70px",
                    width: '100%',
                    height: {lg:600,sm:600,xs:600},
                }}
            >
                <h1>Bookings</h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    bulletActiveClass='swiper-pagination-bullet-active'
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {RoutingDetails.map(renderCard)}
                </Swiper>
            </Box>
        </div>
    )
}