import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/system';

const MyComponent = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
  });


const About = () => {
    return (
        <div>
           <p>This is about page</p> 
           <Link to="/" style={{textDecoration: 'none'}}>
           <Button variant="contained">Back to Home Page</Button>
           </Link>
           <Container style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', minHeight: '100vh'}}>
              <Box>
                 <MyComponent> 
                     Hello Good Peoples !
                 </MyComponent>
              </Box>
           </Container>
        </div>
    );
};

export default About;