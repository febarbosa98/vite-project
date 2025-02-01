import { Container, Grid, styled, Typography } from "@mui/material";
import StyledButton from "../../../../componets/StyledButton/StyledButton";
import chat from "../../../../assets/img/chat.png";
import jogo from "../../../../assets/img/jogo.png";
import onebitflix from "../../../../assets/img/onebitflix.png";
import onebitx from "../../../../assets/img/onebitx.png";
import pokedex from "../../../../assets/img/pokedex.png";
import restaurante from "../../../../assets/img/restaurante.png";
import { motion } from "motion/react"
import { useRef } from "react";
// import page from "../../../../assets/img/page.png";
// import car from "../../../../assets/img/car.png";



const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    [theme.breakpoints.up('xs')]:{ // <= mobile
      paddingTop: '20px',
      
    },
    [theme.breakpoints.up('md')]:{ // >= mobile
      paddingTop: '40px',
      height: "100%",
    
  },
  }));
  const StyledProject = styled("div",)(() => ({
    display: "flex",
    flexDirection: "column",
    border: `1px solid rgba(255, 255, 255, 0.29)`,
    boxShadow: `0 0 10px rgba(255, 255, 255, 0.05)`,
    padding: '15px',
    transition: '0.7s',
    borderRadius: '10px',
    margin:'0px auto',
    maxWidth: '528px',
    minWidth: '300px',
    height:'100%',
    '&:hover':{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                   
        },
    
  }));
  const Styledimg = styled("img")(({theme}) => ({
    [theme.breakpoints.up('xs')]:{ // <= mobile
      maxHeight: '20rem',
      height: 'auto'
  },
  [theme.breakpoints.up('md')]:{ // >= mobile
    maxHeight: '22rem',
    height: '100%'
    
  },
  }));

  const scrollRef = useRef(null)

  return (
    <>
      <StyledProjects id="project">
        <Container maxWidth="lg"  >
          <Typography
            color="primary.contrastText"
            variant="h1"
            textAlign="center"
            py={6}
          >
            Projetos
          </Typography>

          <motion.div
          style={{margin:'0 20px' }}
            initial={{ opacity: 0, y: 200, }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{duration: 0.5, type: "spring", ease: "easeOut"}}
            viewport={{ root: scrollRef }}
            >

           
          <Grid container spacing={2}  columns={{ xs: 2, md: 4 }} pb={5}>
            <Grid item  xs={2} md={2}>
              <StyledProject>
                <Typography
                  color="primary.contrastText"
                  variant="h5"
                  pb={2}
                >
                  Onebitflix
                </Typography>

                <Styledimg
                  src={onebitflix}
                  alt="" 
                />

                <Typography
                  color="primary.contrastText"
                  variant="body1"
                  textAlign="justify"
                  py={2}
                >
                  um projeto inspirado na Netflix, feito no curso da OneBitcode.
                  É um site de aulas on-line de programação. No Back-end foi
                  utilizado o adminJS ligado ao PostgreSQL. Já no front-end foi
                  utilizado o nextJS.
                </Typography>
                

                <Grid container display="flex" justifyContent="center" spacing={3} py={3}>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                  <StyledButton onClick={() => window.open("https://onebitflix-front.vercel.app/", "_blank")}>
                    <Typography>Visitar projeto</Typography> 
                  </StyledButton>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => window.open("https://github.com/febarbosa98/onebitflix-front", "_blank")}>
                    <Typography>GitHub</Typography> 
                  </StyledButton>
                    </Grid>
              </Grid>
              </StyledProject>
            </Grid>

            <Grid item  xs={2} md={2}>
              <StyledProject>
                <Typography
                  color="primary.contrastText"
                  variant="h5"
                  pb={2}
                >
                  OnebitX
                </Typography>

                <Styledimg
                  src={onebitx}
                  alt="" 
                />

                <Typography
                  color="primary.contrastText"
                  variant="body1"
                  textAlign="justify"
                  py={2}
                >
                  One BitX é um projeto com foco em praticar as matérias no módulo de Bootstrap,nele abortamos a framework do bootstrap,biblioteca de animação aos.js e tambem abordamos a responsividade
                </Typography>
                

                <Grid container display="flex" justifyContent="center" spacing={3} py={3}>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                  <StyledButton onClick={() => window.open("https://obcx.netlify.app/", "_blank")}>
                    <Typography>Visitar projeto</Typography> 
                  </StyledButton>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => window.open("https://github.com/febarbosa98/onebitx", "_blank")}>
                    <Typography>GitHub</Typography> 
                  </StyledButton>
                    </Grid>
              </Grid>
              </StyledProject>
            </Grid>
            <Grid item  xs={2} md={2}>
              <StyledProject>
                <Typography
                  color="primary.contrastText"
                  variant="h5"
                  pb={2}
                >
                  Pokédex
                </Typography>

                <Styledimg
                  src={pokedex}
                  alt="" 
                />

                <Typography
                  color="primary.contrastText"
                  variant="body1"
                  textAlign="justify"
                  py={2}
                >
                  Uma pokédex simples para encontrar o pokemon pelo nome ou numero, foi feito com HTML, CSS JavaScript.
                </Typography>
                

                <Grid container display="flex" justifyContent="center" spacing={3} py={3}>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                  <StyledButton onClick={() => {
                     window.open("https://pokedex-psi-drab.vercel.app/", "_blank");
                  }}>
                    <Typography>Visitar projeto</Typography> 
                  </StyledButton>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => window.open("https://github.com/febarbosa98/pokedex", "_blank")}>
                    <Typography>GitHub</Typography> 
                  </StyledButton>
                    </Grid>
              </Grid>
              </StyledProject>
            </Grid>
            <Grid item  xs={2} md={2}>
              <StyledProject>
                <Typography
                  color="primary.contrastText"
                  variant="h5"
                  pb={2}
                >
                  Jogo da memória 
                </Typography>

                <Styledimg
                  src={jogo}
                  alt="" 
                />

                <Typography
                  color="primary.contrastText"
                  variant="body1"
                  textAlign="justify"
                  py={2}
                >
                  Um jogo da memoria inspirado em rick and morty simples, foi feito com HTML, CSS JavaScript.
                </Typography>
                

                <Grid container display="flex" justifyContent="center" spacing={3} py={3}>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                  <StyledButton onClick={() => window.open("https://jogo-da-memoria-eight-pi.vercel.app/", "_blank")}>
                    <Typography>Visitar projeto</Typography> 
                  </StyledButton>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => window.open("https://github.com/febarbosa98/jogo-da-memoria", "_blank")}>
                    <Typography>GitHub</Typography> 
                  </StyledButton>
                    </Grid>
              </Grid>
              </StyledProject>
            </Grid>
            <Grid item  xs={2} md={2}>
              <StyledProject>
                <Typography
                  color="primary.contrastText"
                  variant="h5"
                  pb={2}
                >
                  Landing page de um restaurante 
                </Typography>

                <Styledimg
                  src={restaurante}
                  alt="" 
                />

                <Typography
                  color="primary.contrastText"
                  variant="body1"
                  textAlign="justify"
                  py={2}
                >
                  Uma landing page de um restaurante com algumas opções do cardapio e algumas avaliações feito com HTML, CSS, Jquery
                </Typography>
                

                <Grid container display="flex" justifyContent="center" spacing={3} py={3}>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                  <StyledButton onClick={() => window.open("https://landing-page-eight-drab.vercel.app/", "_blank")}>
                    <Typography>Visitar projeto</Typography> 
                  </StyledButton>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => window.open("https://github.com/febarbosa98/landingPage", "_blank")}>
                    <Typography>GitHub</Typography> 
                  </StyledButton>
                    </Grid>
              </Grid>
              </StyledProject>
            </Grid>
            <Grid item  xs={2} md={2}>
              <StyledProject>
                <Typography
                  color="primary.contrastText"
                  variant="h5"
                  pb={2}
                >
                 Chat em tempo real
                </Typography>

                <Styledimg
                  src={chat}
                  alt=""                   
                />

                <Typography
                  color="primary.contrastText"
                  variant="body1"
                  textAlign="justify"
                  py={2}
                >
                  Um site onde é possível conversar em tempo real com os usuários, foi feito com HTML, CSS e JavaScript
                </Typography>
                

                <Grid container display="flex" justifyContent="center" spacing={3} py={3}>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                  <StyledButton onClick={() => window.open("https://chat-frontend-c01y.onrender.com/", "_blank")}>
                    <Typography>Visitar projeto</Typography> 
                  </StyledButton>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => window.open("https://github.com/febarbosa98/chat-tempo-real/", "_blank")}>
                    <Typography>GitHub</Typography> 
                  </StyledButton>
                    </Grid>
              </Grid>
              </StyledProject>
            </Grid>
            

            
          </Grid>
          </motion.div>
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;
