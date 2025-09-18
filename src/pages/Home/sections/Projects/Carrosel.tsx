import Carousel from 'react-material-ui-carousel'
import { styled, Typography, useMediaQuery, useTheme } from '@mui/material'

import chat from "../../../../assets/img/chat.png";
import jogo from "../../../../assets/img/jogo.png";
import onebitflix from "../../../../assets/img/onebitflix.png";
import onebitx from "../../../../assets/img/onebitx.png";
import pokedex from "../../../../assets/img/pokedex.png";
import restaurante from "../../../../assets/img/restaurante.png";
import gitUser from "../../../../assets/img/gitUser.png";
import jokenpo from "../../../../assets/img/jokenpo.png";
import econverse from "../../../../assets/img/econverse.png";
import tirarVisto from "../../../../assets/img/tirarvisto.png";
import avanti from "../../../../assets/img/avanti.png";
import pet from "../../../../assets/img/pet.png";
import { Grid } from '@mui/material';
import StyledButton from '../../../../componets/StyledButton/StyledButton';


 const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      padding: "20px",
    },
    [theme.breakpoints.up("md")]: {
      // >= mobile
      paddingTop: "40px",
      height: "100%",
    },
  }));
  const StyledProject = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    border: `1px solid rgba(255, 255, 255, 0.29)`,
    boxShadow: `0 0 10px rgba(255, 255, 255, 0.05)`,
    padding: "15px",
    transition: "0.7s",
    borderRadius: "10px",
    margin: "0px auto",
    maxWidth: "528px",
    minWidth: "300px",
    maxheight: "600px",
    height: "100%",
    justifyContent: "space-around",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.03)",
    },
  }));
  const Styledimg = styled("img")(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      maxHeight: "20rem",
      height: "auto",
      objectFit: "cover",
      borderRadius: "10px",
    },
    [theme.breakpoints.up("md")]: {
      // >= mobile
      maxHeight: "22rem",
      height: "16rem",
      objectFit: "cover",
      borderRadius: "10px",
    },
  }));

function Carrosel() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const projetos = [
  {
    title: "Perfil GitHub",
    description:
      "Aplicação desenvolvida com React, Axios e Tailwind CSS para buscar e exibir perfis do GitHub. Mostra informações como nome, bio, localização, seguidores e repositórios, com design responsivo e tratamento de erros.",
    image: gitUser,
    urlSite: "https://api-git-one.vercel.app/",
    urlGit: "https://github.com/febarbosa98/api-git",
  },
  {
    title: "Econverse",
    description:
      "O projeto foi criado utilizando React com Vite, visando performance e facilidade de manutenção. Toda a interface foi componentizada, separando cada parte em arquivos próprios.",
    image: econverse,
    urlSite: "https://econverse-black.vercel.app/",
    urlGit: "https://github.com/febarbosa98/econverse",
  },
  {
    title: "Tirar Visto",
    description:
      "Este é um projeto desenvolvido em Next.js com React e TailwindCSS para uma consultoria especializada em vistos. O objetivo é oferecer uma experiência moderna, responsiva e intuitiva para quem deseja contratar serviços de assessoria para obtenção de vistos e passaportes.",
    image: tirarVisto,
    urlSite: "https://tirar-visto.vercel.app/",
    urlGit: "https://github.com/febarbosa98/tirar-visto",
  },
  {
    title: "Avanti",
    description:
      "Este é um projeto de página web para a loja Avanti, desenvolvido com HTML, CSS e JavaScript. O objetivo é apresentar produtos, promoções e informações institucionais de forma moderna e responsiva.",
    image: avanti,
    urlSite: "https://avenue-three.vercel.app/",
    urlGit: "https://github.com/febarbosa98/avanti",
  },
  {
    title: "Pet Devs",
    description:
      "Desenvolvido com Next.js, React e TailwindCSS. O objetivo é criar uma plataforma moderna e responsiva para adoção de animais, com foco na experiência do usuário e na apresentação clara das informações.",
    image: pet,
    urlSite: "https://petdev-jet.vercel.app/",
    urlGit: "https://github.com/febarbosa98/petdev",
  },
  {
    title: "Pedra, Papel e Tesoura",
    description:
      "Projeto interativo desenvolvido em um desafio do Frontend Mentor, focado em manipulação do DOM com JavaScript, layout responsivo com CSS e posicionamento avançado. ",
    image: jokenpo,
    urlSite: "https://jokenpo-vert.vercel.app/",
    urlGit: "https://github.com/febarbosa98/jokenpo",
  },
  {
    title: "OneBitFlix",
    description:
      "um projeto inspirado na Netflix, feito no curso da OneBitcode. É um site de aulas on-line de programação. No Back-end foi utilizado o adminJS ligado ao PostgreSQL. Já no front-end foi utilizado o nextJS.",
    image: onebitflix,
    urlSite: "https://onebitflix-front.vercel.app/",
    urlGit: "https://github.com/febarbosa98/onebitflix-front",
  },
  {
    title: "OneBitX",
    description:
      "OneBitX é um projeto com foco em praticar as matérias no módulo de Bootstrap,nele abortamos a framework do bootstrap,biblioteca de animação aos.js e tambem abordamos a responsividade",
    image: onebitx,
    urlSite: "https://obcx.netlify.app/",
    urlGit: "https://github.com/febarbosa98/onebitx",
  },
  {
    title: "Pokédex",
    description:
      "Uma pokédex simples para encontrar o pokemon pelo nome ou numero, foi feito com HTML, CSS JavaScript.",
    image: pokedex,
    urlSite: "https://pokedex-psi-drab.vercel.app/",
    urlGit: "https://github.com/febarbosa98/pokedex",
  },
  {
    title: "Jogo da memória",
    description:
      "Um jogo da memoria inspirado em rick and morty simples, foi feito com HTML, CSS JavaScript.",
    image: jogo,
    urlSite: "https://jogo-da-memoria-eight-pi.vercel.app/",
    urlGit: "https://github.com/febarbosa98/jogo-da-memoria",
  },
  {
    title: "Landing page de um restaurante",
    description:
      "Uma landing page de um restaurante com algumas opções do cardapio e algumas avaliações feito com HTML, CSS, Jquery",
    image: restaurante,
    urlSite: "https://landing-page-eight-drab.vercel.app/",
    urlGit: "https://github.com/febarbosa98/landingPage",
  },
  {
    title: "Chat em tempo real",
    description:
      "Um site onde é possível conversar em tempo real com os usuários, foi feito com HTML, CSS e JavaScript",
    image: chat,
    urlSite: "https://chat-frontend-c01y.onrender.com/",
    urlGit: "https://github.com/febarbosa98/chat-tempo-real/",
  },
];
 const projetosAgrupados = [];
    const passo = isMobile ? 1 : 2;
    for (let i = 0; i < projetos.length; i += passo) {
        projetosAgrupados.push(projetos.slice(i, i + passo));
    }



    return (
      <>
        <style>
          {`
            .custom-carousel-btn:hover {
              background-color: #4f8e3e !important;
              color: #fff !important;
            }
          `}
        </style>
        <Carousel
          navButtonsAlwaysVisible={!isMobile}
          navButtonsAlwaysInvisible={isMobile}
          fullHeightHover={false}
          navButtonsProps={{
            className: 'custom-carousel-btn',
            style: {
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.29)',
              color: '#fff',
            }
          }}
        >
          {projetosAgrupados.map((grupo, i) => (
            <StyledProjects key={i}>
              <Grid container spacing={2} justifyContent="center">
                {grupo.map((item, j) => (
                  <Grid item xs={12} md={5} key={j}>
                    <StyledProject>
                      <Typography
                        color="primary.contrastText"
                        variant="h5"
                        pb={2}
                      >
                        {item.title}
                      </Typography>
                      <Styledimg
                        src={item.image}
                        alt={item.title}
                        style={{ marginBottom: "2rem" }}
                      />
                      <Typography
                        color="primary.contrastText"
                        variant="body1"
                        textAlign="justify"
                      >
                        {item.description}
                      </Typography>
                      <Grid container display="flex" justifyContent="center" spacing={3} my={2}>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                          <StyledButton onClick={() => window.open(item.urlSite, "_blank")}>
                            <Typography>Visitar projeto</Typography>
                          </StyledButton>
                        </Grid>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                          <StyledButton onClick={() => window.open(item.urlGit, "_blank")}>
                            <Typography>GitHub</Typography>
                          </StyledButton>
                        </Grid>
                      </Grid>
                    </StyledProject>
                  </Grid>
                ))}
              </Grid>
            </StyledProjects>
          ))}
        </Carousel>
      </>
    );

}

export default Carrosel;

