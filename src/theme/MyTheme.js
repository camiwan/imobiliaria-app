import { createTheme } from '@mui/material/styles'
import { indigo, red} from '@mui/material/colors'



const MyTheme = createTheme({
    palette:{
        primary:{
            main: indigo[900],
            
        },
        secondary:{
            main: '#e8eaf6',
        }, 
        background:{
            default: indigo[500],
        }
    },
    components:{
        MuiBottomNavigation:{
            styleOverrides:{
                root:{
                    backgroundColor: indigo[50],
                },
                
            }

        }, 
        MuiButton:{
            styleOverrides:{
                root:{
                    backgroundColor: indigo[900],
                }
            }
        }
    }, 
   
})
export default MyTheme