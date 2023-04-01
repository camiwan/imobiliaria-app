import { ThemeProvider } from '@mui/system'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MyTheme from '../src/theme/MyTheme'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

function App() {

  return (
    <div>
      <ThemeProvider theme={MyTheme} >

        <div>
          <Navbar />
        </div>
        <Container maxWidth='lg'>
          <div>
            <Outlet />
          </div>

        </Container>
        <div>
          <Footer />
        </div>

      </ThemeProvider>
    </div>
  )
}

export default App
