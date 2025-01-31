import { Box, Container, Grid,  styled, Typography } from "@mui/material";
import avatar from "../../../../assets/img/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../componets/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../componets/AnimatedBackground/AnimatedBackground";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from "motion/react"
// import { animate, animateMini } from "motion";

const curriculo = "./curriculo.pdf" 

const Hero = () => {
  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]:{ // <= mobile
        paddingTop: '100px',
        height: "100%",
        paddingBottom: '30px',
    },
    [theme.breakpoints.up('md')]:{ // >= mobile
      paddingTop: '0',
      height: "100vh",
    },

  }));
  const StyledImg = styled("img")(() => ({
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    [theme.breakpoints.up('xs')]:{ // <= mobile
     width: "80%",
     
  },
  [theme.breakpoints.up('md')]:{ // >= mobile
    width: "95%",
  },
  }));

  const StyledSocialMedia = styled("div")(() => ({
    display:"flex",
    flexDirection:'row',
    justifyContent: 'center',
    gap: '20px',
    fontSize: 'large'
    
}));

  

  return (
    <>
      <StyledHero id='inicio'>
        <Container maxWidth="lg" >
          <Grid container spacing={2} alignItems='center'>
            <Grid item xs={12} md={4}>
              <Box position="relative">
                <Box position='absolute' width={'150%'} top={-100} right={0}>
                  <AnimatedBackground/>
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={avatar} />

                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
            
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2} >
                Fernando Barbosa
              </Typography>
               
              <motion.div
                initial={{ opacity: 0, x: 1000 }}
                whileInView={{ opacity: 1, x: 0,  }}
                // viewport={{root:  }}
                
                // initial={{ opacity: 0 }}
              >
             
              <Typography color="primary.contrastText" variant="h2" textAlign="center">
                Desenvolvedor Front End
              </Typography>
                </motion.div>
              
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3} pb={5}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                  <StyledButton onClick={() => console.log('')}>
                    <DownloadIcon />
                    <Typography 
                    component='a'
                    href={curriculo}
                    target="_blank"
                    sx={{
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                    >Download CV</Typography>  
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                  <StyledButton onClick={() => console.log('')}>
                    <EmailIcon />
                    <Typography 
                    component='a'
                    href="mailto:contato@febarbosa.tech"
                    sx={{
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                    >Contato</Typography> 
                  </StyledButton>
                </Grid>
              </Grid>
              <StyledSocialMedia>

              <Typography 
                    component='a'
                    href={'https://www.instagram.com/febarbosa98'}
                    target="_blank"
                    fontSize=''
                    sx={{
                      color: 'primary.contrastText',
                      textDecoration: 'none',

                    }}
                    >                      
                      <InstagramIcon fontSize="large" />
                    </Typography>
                    <Typography 
                    component='a'
                    href={'https://www.linkedin.com/in/febarbosa98/'}
                    target="_blank"
                    sx={{
                      color: 'primary.contrastText',
                      textDecoration: 'none',
                      
                    }}
                    >                      
                      <LinkedInIcon fontSize="large" />
                    </Typography>  
                    <Typography 
                    component='a'
                    href={'https://github.com/febarbosa98/'}
                    target="_blank"
                    sx={{
                      color: 'primary.contrastText',
                      textDecoration: 'none',
                    }}
                    >                      
                      <GitHubIcon fontSize="large"/>
                    </Typography>    
               
            </StyledSocialMedia>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
