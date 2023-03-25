import { React, useState } from 'react'

import { styled } from '@mui/material/styles';
import { Box, TextField, Select, MenuItem, InputLabel, Button, Paper, Grid,Avatar } from '@mui/material';

import Logo from "../../../../img/Logo.png";
import Header from "../../../Home/ChildComponents/Header";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1B2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DriverAccountLogger() {
  const [Gender, setGender] = useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div>
      <Header />
      <Grid container spacing={2} mt={15}>        
        <Grid item xs={12} lg={6}>
        <Item>
            <Avatar
              alt="Remy Sharp"
              src={Logo}
              sx={{ width: {xs:100 , lg:320}, height: {xs:100 , lg:320} }}
            />
          </Item>
          <Item>No collection of people who are all waiting for the same thing are capable of holding a natural conversation. Even if the thing they are waiting for is only a taxi.</Item>
          <Item> <Item>No collection of people who are all waiting for the same thing are capable of holding a natural conversation. Even if the thing they are waiting for is only a taxi.</Item></Item>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Item><h1>Go Any Where</h1></Item>          
          <Item><TextField id="outlined-basic" label="Outlined" variant="outlined" color='secondary' /></Item>
          <Item><TextField id="outlined-basic" label="Outlined" variant="outlined" color='secondary' /></Item>
          <Item><TextField id="outlined-basic" label="Outlined" variant="outlined" color='secondary' /></Item>
          <Item><TextField id="outlined-basic" label="Outlined" variant="outlined" color='secondary' /></Item>
          <Item><InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Gender}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </Item>
          <Item>
            <Button variant="contained">Log in</Button>
          </Item>          
        </Grid>
      </Grid>
    </div>
  )
}