import { AppBar, MenuItem, styled, Toolbar, Typography } from "@mui/material"

const NavBar = () => {

    const StyledToobar = styled(Toolbar)(() => ({
        display:'flex',
        justifyContent: 'space-evenly',
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