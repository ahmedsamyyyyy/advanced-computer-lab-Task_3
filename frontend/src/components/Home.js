import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <div className="Home">
            <Box sx={{marginBottom: 2}}>
            <Button variant="contained"
            onClick={() => window.location.href=`/users`}
            margin="normal"
            padding="normal"
            >Authors list</Button>
            {/* margin */}
            </Box>
            </div>
        </div>
    );
};

export default Home;