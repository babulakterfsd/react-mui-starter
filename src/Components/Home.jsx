import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

export default function Home({mode}) {
  return (
          <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
              <Box>
                  <Typography>
                    The HomePage is in <Button variant='contained' color='beguni' style={{color: '#fff', padding: '5px'}}>
                    {mode === 'dark' ? 'Dark' : 'Light'}
                        </Button> Mode now.. 
                  </Typography>
              </Box>
          </Container>
  )}
