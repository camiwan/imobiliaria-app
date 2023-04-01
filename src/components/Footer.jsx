import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import BottomNavigation from '@mui/material/BottomNavigation'
import { BottomNavigationAction } from '@mui/material'
import Paper from '@mui/material/Paper'

function Footer() {
  return (
    <Paper sx={{ bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation position='fixed' showLabels>

        <BottomNavigationAction
          label='Instagram'
          icon={<InstagramIcon />}
        />

      </BottomNavigation>

    </Paper>
  )
}

export default Footer