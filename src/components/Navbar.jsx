import React from 'react'

import {
  AppBar, Toolbar, CssBaseline, Typography, useTheme
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles/makeStyles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(2),
    display: "flex",
    underline: "none",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    underline: "none",
    color: "white",
    fontSize: "28px",
    marginLeft: theme.spacing(2),
    borderBottom: "1px solid transparent",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid #f5f5f5",
      
    },
  },
}));

function Navbar() {

  const classes = useStyles();
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down.logo);

  return (
    <AppBar position='fixed'>

      <CssBaseline />
      <Toolbar>
        <Typography variant='h5' className={classes.logo}>
          IMOBILIARIA APP
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>Home</Link>
        </div>
        <div className={classes.navlinks}>
          <Link to="/sobre" className={classes.link}>Sobre Nós</Link>
        </div>
        <div className={classes.navlinks}>
          <Link to="/contato" className={classes.link}>Contato</Link>
        </div>
      </Toolbar>

    </AppBar>
  );
}

export default Navbar