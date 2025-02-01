import {  Container, Grid,  Link,  styled,  Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    const Styledfooter = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        width: '100vw',
        height: "20vh",
        paddingTop: '50px ',
      }));
      const StyledSocialMedia = styled("div")(() => ({
        paddingTop: '15px ',
        display:"flex",
        flexDirection:'row',
        justifyContent: 'center',
        gap: '20px'
    }));
    return (
      <>
        <Styledfooter>
        <Container>

            <Grid container textAlign={'center'} columns={{ xs: 2, md: 4 }}>
            <Grid item xs={2} md={2}>
            <Typography variant="h4">Desenvolvimento</Typography>
            <Typography variant="body1" pt={1}>Fernando Barbosa</Typography>
            <StyledSocialMedia>

                <Link href='https://www.instagram.com/febarbosa98'> 
                <InstagramIcon/>
                </Link>
                <Link href='https://www.linkedin.com/in/febarbosa98/'>
                <LinkedInIcon/>
                </Link>
                <Link href='https://github.com/febarbosa98/'>
                <GitHubIcon/>
                </Link>
            </StyledSocialMedia>
            </Grid>



            <Grid item xs={2} md={2}>
            <Typography variant="h4">Contato</Typography>
            <Typography variant="body1" py={1}>+55 11 96025-5173</Typography>
            <Link href="mailto:contato@febarbosa.tech" >contato@febarbosa.tech</Link>
     
            </Grid>
            </Grid>
            <Typography pt={5} textAlign={'center'}>
      © {new Date().getFullYear()}  Todos os direitos reservados.
            </Typography>
        </Container>
        </Styledfooter>

      </>
    )
  }
  
  export default Footer