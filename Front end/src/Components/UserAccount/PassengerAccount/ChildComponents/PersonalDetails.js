import React from 'react'
import { Box,Chip,Stack,Button } from "@mui/material";

export default function PersonalDetails() {

    const PersonalDetails = [{Name:"amal",Address:"Mathara",Phone:"0712532113"}]

    return (
        <div> <Box
            sx={{
                mt: '80px',
                width: "96%",
                ml: '2%',
                p: "10px",
                borderRadius: '40px',
                height: "auto",
                backgroundColor: 'green'
            }}
        >
            <Stack direction="row" spacing={1}>
                {PersonalDetails.map((val)=>{
                    return(
                        <div>
                            <Chip label={"Name : " + val.Name} variant="outlined"/>
                            <Chip label={"Name : " + val.Address} variant="outlined"/>
                        </div>
                        )
                    }
                )}
                <Button variant="outlined">Change</Button>
            </Stack>
        </Box>
        </div>
    )
}
