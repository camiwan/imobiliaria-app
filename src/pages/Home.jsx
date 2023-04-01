import React from 'react'
import BannerImage from '../assets/casas/banner.jpg'
import '../css/Home.css'
import { Link } from "react-router-dom";
import { Button, Container } from '@mui/material'
import { yellow } from '@mui/material/colors';

function Home() {
  return (
    <Container maxWidth='lg'>

      <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='headerContainer'>

          <Link to="/casas">
            <Button 
              variant="contained"
              sx={{
                borderRadius: 50,
                backgroundColor: '#8c9eff',
                "&:hover": yellow
              }}
            >
              Ver Casas
            </Button>
          </Link>

        </div>
      </div>
    </Container>
  )
}

export default Home