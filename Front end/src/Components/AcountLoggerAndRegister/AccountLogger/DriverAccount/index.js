import { React, useState, useEffect } from 'react'
import Axios from 'axios';
import { styled } from '@mui/material/styles';
import { Box, TextField, InputLabel, IconButton, Button, Paper, Grid, Avatar } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useForm } from 'react-hook-form';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

import { useNavigate  } from "react-router-dom";

import {Banner1,Banner2,Banner3,Banner4} from "../../../../img";
import Header from "../../../Home/ChildComponents/Header";

import { useDispatch , useSelector } from "react-redux";
import { AuthActions } from '../../../Store/AuthSlice';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1B2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow:'none'
}));

const Input = styled('input')({
  display: 'none',
});

export default function DriverAccountLogger() {  
  const dispatch = useDispatch(); 

  let navigate = useNavigate();

  const [SubmitData, setSubmitData] = useState(false)  

//Main Logging
    const { register, handleSubmit, formState: { errors } } = useForm();    
    const onSubmit = (data) => {
      Axios.post("http://localhost:3001/api/DriverLogin", {Email: data.Email, Password: data.Password }).then((response) => {
       if(response.data[0]){  
        dispatch(AuthActions.login({userMode:'Driver',Email: data.Email,Password:data.Password})); 
        navigate("../DriverAccount");
      }
      });      
    };  
    
  return (
    <div>
      <Header />
      <Grid container spacing={2} columns={16} mt={15}  >
        <Grid item lg={8} sm={16} xs={16} >
          <Item>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,                
              }}
              bulletActiveClass='swiper-pagination-bullet-active'
              modules={[Autoplay, Pagination]}
            >
              <SwiperSlide><img src={Banner1} width="50%" height="50%" /></SwiperSlide>
              <SwiperSlide><img src={Banner2} width="50%" height="50%" /></SwiperSlide>
              <SwiperSlide><img src={Banner3} width="50%" height="50%" /></SwiperSlide>
              <SwiperSlide><img src={Banner4} width="50%" height="50%" /></SwiperSlide>
            </Swiper>
          </Item>         
        </Grid>
        <Grid item lg={8} sm={16} xs={16}>
          <Box sx={{height:'100%',backgroundColor:'#fbc02d',borderRadius:'50px',boxShadow:'3' ,m:2,pb:10,pt:10}}>
            <Item><h1>Be A Good Driver</h1></Item>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Item><TextField  {...register("Email", {required: {value:true,message:'This field is required'}, pattern: {value:/^\S+@\S+$/i, message: 'Invalid Email'}})} value={localStorage.getItem('userEmail')} helperText={errors.Email && errors.Email.message} error={Boolean(errors.Email)} label="E-mail" type="email" variant="outlined" color='secondary' name='Email'   /></Item>
            <Item><TextField {...register("Password")} label="Password" type="password" variant="outlined" color='secondary' name='Password' value={localStorage.getItem('userPassword')} /></Item>
            <Item>
              <Button variant="contained" type='submit'>Log in</Button>
            </Item>
              <Item>
                <IconButton color="primary" aria-label="upload picture" component="span">
                  < FacebookIcon/>
                </IconButton>
                <IconButton color="primary" aria-label="upload picture" component="span">
                 < GoogleIcon/>
                </IconButton>
                <IconButton color="primary" aria-label="upload picture" component="span">
                  < TwitterIcon/>
                </IconButton>
              </Item>
            </form>   
          </Box>       
        </Grid>
      </Grid>
    </div>
  )
}
