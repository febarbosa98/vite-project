import { Container, Grid, styled, Typography } from "@mui/material";
import StyledButton from "../../../../componets/StyledButton/StyledButton";
import chat from "../../../../assets/img/chat.png";
import jogo from "../../../../assets/img/jogo.png";
import onebitflix from "../../../../assets/img/onebitflix.png";
import onebitx from "../../../../assets/img/onebitx.png";
import pokedex from "../../../../assets/img/pokedex.png";
import restaurante from "../../../../assets/img/restaurante.png";
import gitUser from "../../../../assets/img/gitUser.png";
import jokenpo from "../../../../assets/img/jokenpo.png";
import { motion } from "motion/react"
import { useRef } from "react";
// import page from "../../../../assets/img/page.png";
// import car from "../../../../assets/img/car.png";


const Projetos = [
  {
    title: "Perfil GitHub",
    description: "Aplicação desenvolvida com React, Axios e Tailwind CSS para buscar e exibir perfis do GitHub. Mostra informações como nome, bio, localização, seguidores e repositórios, com design responsivo e tratamento de erros.",
    image: gitUser,
    urlSite: "https://api-git-one.vercel.app/",
    urlGit: "https://github.com/febarbosa98/api-git"
  },
  {
    title: "Pedra, papel e tesoura",
    description: "Projeto interativo desenvolvido em um desafio do Frontend Mentor, focado em manipulação do DOM com JavaScript, layout responsivo com CSS e posicionamento avançado. Um jogo simples, visualmente atrativo e ótimo para praticar front-end.",
    image: jokenpo,
    urlSite: "https://jokenpo-vert.vercel.app/",
    urlGit: "https://github.com/febarbosa98/jokenpo"
  },
  {
    title: "OneBitFlix",
    description: "um projeto inspirado na Netflix, feito no curso da OneBitcode. É um site de aulas on-line de programação. No Back-end foi utilizado o adminJS ligado ao PostgreSQL. Já no front-end foi utilizado o nextJS.",
    image: onebitflix,
    urlSite: "https://onebitflix-front.vercel.app/",
    urlGit: "https://github.com/febarbosa98/onebitflix-front"
  },
  {
    title: "OneBitX",
    description: "OneBitX é um projeto com foco em praticar as matérias no módulo de Bootstrap,nele abortamos a framework do bootstrap,biblioteca de animação aos.js e tambem abordamos a responsividade",
    image: onebitx,
    urlSite: "https://obcx.netlify.app/",
    urlGit: "https://github.com/febarbosa98/onebitx"
  },
  {
    title: "Pokédex",
    description: "Uma pokédex simples para encontrar o pokemon pelo nome ou numero, foi feito com HTML, CSS JavaScript.",
    image: pokedex,
    urlSite: "https://pokedex-psi-drab.vercel.app/",
    urlGit: "https://github.com/febarbosa98/pokedex"
  },
  {
    title: "Jogo da memória",
    description: "Um jogo da memoria inspirado em rick and morty simples, foi feito com HTML, CSS JavaScript.",
    image: jogo,
    urlSite: "https://jogo-da-memoria-eight-pi.vercel.app/",
    urlGit: "https://github.com/febarbosa98/jogo-da-memoria"
  },
  {
    title: "Landing page de um restaurante",
    description: "Uma landing page de um restaurante com algumas opções do cardapio e algumas avaliações feito com HTML, CSS, Jquery",
    image: restaurante,
    urlSite: "https://landing-page-eight-drab.vercel.app/",
    urlGit: "https://github.com/febarbosa98/landingPage"
  },
  {
    title: "Chat em tempo real",
    description: "Um site onde é possível conversar em tempo real com os usuários, foi feito com HTML, CSS e JavaScript",
    image: chat,
    urlSite: "https://chat-frontend-c01y.onrender.com/",
    urlGit: "https://github.com/febarbosa98/chat-tempo-real/"
  },
  
]


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
               {Projetos.map((projeto, index)=>(
            <Grid item  xs={2} md={2}>
              <StyledProject key={index}>
                  <Typography
                  color="primary.contrastText"
                  variant="h5"
                  pb={2}
                >
                  {projeto.title}
                </Typography>

                <Styledimg
                  src={projeto.image}
                  alt="" 
                />

        <Typography
                  color="primary.contrastText"
                  variant="body1"
                  textAlign="justify"
                  py={2}
                >
                  {projeto.description}
                </Typography>

                <Grid container display="flex" justifyContent="center" spacing={3} py={3}>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                  <StyledButton onClick={() => window.open(projeto.urlSite, "_blank")}>
                    <Typography>Visitar projeto</Typography> 
                  </StyledButton>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => window.open(projeto.urlGit, "_blank")}>
                    <Typography>GitHub</Typography> 
                  </StyledButton>
                    </Grid>
                    </Grid>
                
                

              </StyledProject>
            </Grid>
               ))}
            

            
          </Grid>
          </motion.div>
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;
