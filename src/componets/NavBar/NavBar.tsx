import { AppBar, MenuItem, styled, Toolbar, Typography } from "@mui/material"
import theme from "../../theme";

const NavBar = () => {

    const StyledToobar = styled(Toolbar)(() => ({
        display:'flex',
        justifyContent: 'space-evenly',
        [theme.breakpoints.up('xs')]:{ // <= mobile
          justifyContent: 'center',
      },
      [theme.breakpoints.up('md')]:{ // >= mobile
        justifyContent: 'space-evenly',
      },
      }));

    return (
      <>
       <AppBar position="fixed">
       <StyledToobar>
            <MenuItem><Typography
            variant="h6"
            component="a"
            href="#inicio"
            sx={{
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              [theme.breakpoints.up('xs')]:{ // <= mobile
                fontSize: '16px',
                justifyContent: 'center',
                mr: -2,

            },
            [theme.breakpoints.up('md')]:{ // >= mobile
              fontSize: '1.125rem'
              
            },
            }}
          >
            Inico
          </Typography></MenuItem>
            <MenuItem><Typography
            variant="h6"
            noWrap
            component="a"
            href="#sobre"
            sx={{
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              [theme.breakpoints.up('xs')]:{ // <= mobile
                fontSize: '16px',
                justifyContent: 'center',
                mr: -2,

            },
            [theme.breakpoints.up('md')]:{ // >= mobile
              fontSize: '1.125rem'
              
            },
            }}
          >
            Sobre
          </Typography></MenuItem>
            <MenuItem><Typography
            variant="h6"
            noWrap
            component="a"
            href="#project"
            sx={{
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              [theme.breakpoints.up('xs')]:{ // <= mobile
                fontSize: '16px',
                justifyContent: 'center',
                mr: -2,

            },
            [theme.breakpoints.up('md')]:{ // >= mobile
              fontSize: '1.125rem'
              
            },
            }}
          >
            Projetos
          </Typography></MenuItem>
            
       </StyledToobar>
       </AppBar>
      </>
    )
  }
  
  export default NavBar