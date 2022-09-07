import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './loginpage.css';
export default function Loginpage() {
    <Submit />
    return (
       <>
       <h2>Login here</h2>
       <div className="login-page">
      
        <Box className="credentials">
        
        <TextField id="username" label="Username" variant="outlined" /><br/>
        <br/>
        <TextField id="password" type="password" label="Password" variant="outlined" />
        <br/>
        </Box>
        <br/>
        <Stack spacing={2} direction="row">
        
        <Button onClick={Submit()}  variant="contained">Submit</Button>
        </Stack>
       </div>
        </>
    );
}

function Submit() {
     return (
     <h1></h1>
        );
    
}
