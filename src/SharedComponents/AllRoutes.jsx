import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Components/About';
import Home from '../Components/Home';
import NotFound from '../Components/NotFound';
import MyCustomTheme from '../Styles/MyCustomTheme';

const AllRoutes = ({mode}) => {
    return (
        <ThemeProvider theme={MyCustomTheme}>
            <Routes>
                <Route path="/" element={<Home mode={mode} />} />
                <Route path="/home" element={<Home mode={mode} />} />
                <Route path="/about" element={<About mode={mode} />} />
                <Route path="*" element={<NotFound mode={mode} />} />
            </Routes>
        </ThemeProvider>
    );
};

export default AllRoutes;