import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const NotFound = () => {
    return (
        <div>
            <p>Sorry ! page not found !!</p>
            <Link to="/" style={{textDecoration: 'none'}}>
            <Button variant="contained">Hello World</Button>
            </Link>
        </div>
    );
};

export default NotFound;