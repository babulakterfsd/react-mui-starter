import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const About = () => {
    return (
        <div>
           <p>This is about page</p> 
           <Link to="/" style={{textDecoration: 'none'}}>
           <Button variant="contained">Back to Home Page</Button>
           </Link>


        </div>
    );
};

export default About;