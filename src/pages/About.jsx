import React from 'react'
import imobSobreNos from '../assets/imob-fotos/imobSobreNos.jpg'
import Card from '@mui/material/Card'
import { CardActionArea, CardMedia } from '@mui/material'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { indigo } from '@mui/material/colors'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(2),
  textAlign: 'justify',
  maxWidth: 900,
  color: theme.palette.text.secondary,
  
}));

function About() {
  return (
    <Box sx={{
      display: 'flex',
      marginTop: 10,
    }}>
      <Grid container item xs={4} flexGrow={1} >
        <Grid marginTop={20}>
          <Item>
            <Card sx={{ maxWidth: 800}}>
              <CardMedia
                component='img'
                height='200'
                width='600'
                image={imobSobreNos}                
              />
            </Card>
          </Item>
        </Grid>        
      </Grid>
      <Grid container item xs={8} marginTop={8} marginBottom={5} >
        <Item
          sx={{
            my: 1,
            mx: 'auto',
            p: 8,

          }}
        >
          <Typography gutterBottom variant="h4" component="div">
            SOBRE NÓS
          </Typography>
          <Typography variant="body2" color={indigo[300]}>

            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.
            Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
            Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente
            officiis modi at sunt excepturi expedita sint?
            Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
            cumque velit.

          </Typography>
        </Item>
        

      </Grid>
     
    </Box>

  )
}

export default About