import { AppBar,  CssBaseline, Fab, Fade, Slide, styled, Toolbar,  Typography, useScrollTrigger } from "@mui/material"
import theme from "../../theme";
import * as React from 'react';
import Box from '@mui/material/Box';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



interface Props {
    window?: () => Window;
  children?: React.ReactElement<unknown>;
}
function ScrollTop(props: Props) {
  const { children, window } = props;
  
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#inicio');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}


function HideOnScroll(props: Props) {
  const { children, window } = props;
    const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

const NavBar = (props: Props) => {

    const StyledToobar = styled(Toolbar)(() => ({
        display:'flex',
        justifyContent: 'space-evenly',
        width: '100vw',
        gap: '20px',
        [theme.breakpoints.up('xs')]:{ // <= mobile
          justifyContent: 'center',
          
      },
      [theme.breakpoints.up('md')]:{ // >= mobile
        justifyContent: 'space-evenly',
      },
      }));

    return (
      <>
               
        <CssBaseline />
       <HideOnScroll {...props}>
        <AppBar >
       <StyledToobar>
            <Typography
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

            },
            [theme.breakpoints.up('md')]:{ // >= mobile
              fontSize: '1.125rem'
              
            },
            }}
          >
            Inico
          </Typography>
            <Typography
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

            },
            [theme.breakpoints.up('md')]:{ // >= mobile
              fontSize: '1.125rem'
              
            },
            }}
          >
            Sobre
          </Typography>
            <Typography
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

            },
            [theme.breakpoints.up('md')]:{ // >= mobile
              fontSize: '1.125rem'
              
            },
            }}
          >
            Projetos
          </Typography>
            
       </StyledToobar>
       </AppBar>
        </HideOnScroll>
        <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
       
      </>
    );
  }
  
export default NavBar;