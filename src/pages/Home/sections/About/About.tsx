import {  Container, Grid, styled, Typography } from "@mui/material";
import theme from "../../../../theme";
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


const About = () => {
    const StyledAbout = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.contrastText,
        [theme.breakpoints.up('xs')]:{ // <= mobile
            height: '100%',
        },
        [theme.breakpoints.up('md')]:{ // <= mobile
            height: '100vh',
        },
        
      }));
      
      const StyledGrid = styled("div")(() => ({
        borderRadius: "3px",
        padding: "30px 0",
        border: `1px solid rgba(0, 0, 0, 0.1)`,
        boxShadow: `0 0 10px rgba(0, 0, 0, 0.1)`,
        color: theme.palette.primary.main,
        width: '300px',
        '&:hover':{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.contrastText,
        },
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      const StyledSkill = styled("div")(() => ({
        borderRadius: "3px",
        padding: "30px 0",
        border: `1px solid rgba(0, 0, 0, 0.1)`,
        boxShadow: `0 0 10px rgba(0, 0, 0, 0.1)`,
        color: theme.palette.primary.main,
        transition: '0.7s',
        width: 'auto',
        '&:hover':{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.contrastText,
                   
        },
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
      }));

    return (
      <>
        <StyledAbout id="sobre">
            <Container maxWidth="lg" >
            <Typography color="primary" variant="h1" textAlign="center" py={6}>Sobre mim</Typography>
                <Grid container spacing={2} justifyContent={'center'} pb={4}>
                     <Grid item >
                <StyledGrid>
                        <WorkspacePremiumIcon/>
                    <Typography fontWeight="600" variant="h5" >Experiencia</Typography>
                    <Typography variant="body1" >6 anos</Typography>
                    <Typography variant="body1" >Sub-Gerente em restaurante</Typography>
                </StyledGrid>
                    </Grid>
                    <Grid item>
                <StyledGrid>
                    <SchoolIcon/>
                    <Typography fontWeight="600" variant="h5" textAlign="center" >Escolaridade</Typography>
                    <Typography variant="body1" textAlign="center">Tecnologia</Typography>
                    <Typography variant="body1" textAlign="center">Analise e desenvolvimento de sistemas</Typography>
                </StyledGrid>
                    </Grid>
                </Grid>
                <Typography color="primary" variant="body1" fontSize={19} textAlign="justify" py={4}>
                Profissional dedicado com experiência sólida como subgerente de restaurante, especializado na gestão eficaz de operações de delivery e do salão. Demonstro habilidades excepcionais na coordenação de equipes, garantindo um ambiente de trabalho eficiente e acolhedor. Sou um comunicador eficaz e um líder motivador, capaz de identificar e resolver problemas rapidamente para garantir a satisfação dos clientes e o sucesso do negócio. Possuo conhecimentos básicos de programação, adquiridos através do meu atual curso de Análise e Desenvolvimento de Sistemas, o que me proporciona uma compreensão fundamental das tecnologias emergentes e sua aplicação prática nos negócios.
                </Typography>
                <hr />
                <Typography color="primary" variant="h1" textAlign="center" id='skills' py={6}>Habilidades</Typography>
              
                    <Grid container spacing={2}  columns={{ xs: 4, md: 8 }} pb={5}>
                        <Grid  item xs={2} md={2}>
                    <StyledSkill>
                        <Typography  variant="h5" >JavaScript</Typography>
                    </StyledSkill>
                        </Grid>
                        <Grid  item xs={2} md={2}>
                    <StyledSkill>
                        <Typography  variant="h5" >HTML</Typography>
                    </StyledSkill>
                        </Grid>
                        <Grid  item xs={2} md={2}>
                    <StyledSkill>
                        <Typography  variant="h5" >CSS</Typography>
                    </StyledSkill>
                        </Grid>
                        <Grid  item xs={2} md={2}>
                    <StyledSkill>
                        <Typography  variant="h5" >React</Typography>
                    </StyledSkill>
                        </Grid>
                        <Grid  item xs={2} md={2}>
                    <StyledSkill>
                        <Typography  variant="h5" >NodeJs</Typography>
                    </StyledSkill>
                        </Grid>
                        <Grid item xs={2} md={2}>
                    <StyledSkill>
                        <Typography  variant="h5" >NextJs</Typography>
                    </StyledSkill>
                        </Grid>
                        <Grid item xs={2} md={2}>
                    <StyledSkill>
                        <Typography  variant="h5" >TypeScript</Typography>
                    </StyledSkill>
                        </Grid>
                        <Grid item xs={2} md={2}>
                    <StyledSkill>
                        <Typography  variant="h5" >Bootstrap</Typography>
                    </StyledSkill>
                        </Grid>
                   
                    </Grid>
                
            </Container>
        </StyledAbout>
      </>
    )
  }
  
  export default About
  