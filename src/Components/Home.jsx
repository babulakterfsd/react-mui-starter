import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({mode}) {

  return (
          <Container style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', minHeight: '100vh'}}>
              <Box>
                  <Typography>
                    The HomePage is in <Button variant='contained' color='beguni' style={{color: '#fff', padding: '5px'}}>
                    {mode === 'dark' ? 'Dark' : 'Light'}
                        </Button> Mode now.. 
                  </Typography>
              </Box>
              <Box>
                  <Link to="/about" style={{color: '#fff', textDecoration: 'none'}}>
                        <Button variant='contained' color='primary' style={{color: '#fff'}}> About Page</Button>
                  </Link>
              </Box>
          </Container>
  )}
