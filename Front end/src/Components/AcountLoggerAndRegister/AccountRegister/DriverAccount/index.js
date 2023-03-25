import { React, useState, useEffect } from 'react'
import Axios from 'axios';
import { styled } from '@mui/material/styles';
import { Box, TextField, InputLabel, Button, Paper, Grid, Avatar } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useForm } from 'react-hook-form';

import Logo from "../../../../img/Logo.png";
import Header from "../../../Home/ChildComponents/Header";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1B2027' : '#fff',
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

  const [RegisterData, setRegisterData] = useState({
    Name: '', Email: '', Address: '', Phone: '', Password: ''
  });

  const handleRegisterData = (e) => {
    setRegisterData({
      ...RegisterData,
      [e.target.name]: e.target.value
    })
  }
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
      Axios.post("http://localhost:3001/api/DriverRegister", { Name: data.Name, Email: data.Email, Address: data.Address, Phone: data.Phone, Password: data.Password, RegisterDate: new Date().toISOString().split('T')[0], Status: 'Active', Ratings: 0 }).then((responce) => {
       console.log(responce.data.Status);  
      });
      
    };  
    
  return (
    <div>
      <Header />
      <Grid container spacing={2} columns={16} mt={15}>
        <Grid item lg={8} sm={16} xs={16}>
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
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
            >
              <SwiperSlide><img src={Logo} width="50%" height="50%" /></SwiperSlide>
              <SwiperSlide>Banner</SwiperSlide>
              <SwiperSlide>Discounts</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </Item>
          <Item>No collection of people who are all waiting for the same thing are capable of holding a natural conversation. Even if the thing they are waiting for is only a taxi.</Item>
          <Item> <Item>No collection of people who are all waiting for the same thing are capable of holding a natural conversation. Even if the thing they are waiting for is only a taxi.</Item></Item>
        </Grid>
        <Grid item lg={8} sm={16} xs={16}>
          <Item><h1>Be A Good Driver</h1></Item>

          <form onSubmit={handleSubmit(onSubmit)}>
          <Item><TextField  {...register("Name", {required: {value:true,message:'This field is required'}, maxLength: 80})} helperText={errors.Name && errors.Name.message} error={Boolean(errors.Name)} type="text" label="Name" variant="outlined" color='secondary' name='Name'  /></Item>
          <Item><TextField  {...register("Email", {required: {value:true,message:'This field is required'}, pattern: {value:/^\S+@\S+$/i, message: 'Invalid Email'}})}  helperText={errors.Email && errors.Email.message} error={Boolean(errors.Email)} label="E-mail" type="email" variant="outlined" color='secondary' name='Email'   /></Item>
          <Item><TextField  {...register("Address", {required: {value:true,message:'This field is required'}})} helperText={errors.Address && errors.Address.message} error={Boolean(errors.Address)} label="Address" type="text" variant="outlined" color='secondary' name='Address'   /></Item>
          <Item><TextField  {...register("Phone", {required: {value:true,message:'This field is required'}})} helperText={errors.Phone && errors.Phone.message} error={Boolean(errors.Phone)} label="Phone" type="tel" variant="outlined" color='secondary' name='Phone' /></Item>
          <Item><TextField  {...register("Password", {required: {value:true,message:'This field is required'}, minLength: {value:5, message: 'The password must be at least 5 characters'}})} helperText={errors.Password && errors.Password.message} error={Boolean(errors.Password)}  label="Password" type="password" variant="outlined" color='secondary' name='Password' /></Item>
          <Item>
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(e)=>{console.log(e.target.value[0],'sd')}}/>
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label>
          </Item>
          <Item>
            <Button variant="contained" type='submit'>Log in</Button>
          </Item>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}
