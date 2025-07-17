import { Box, Container, Grid, styled, Typography } from "@mui/material";
import StyledButton from "../../../../componets/StyledButton/StyledButton";
import chat from "../../../../assets/img/chat.png";
import jogo from "../../../../assets/img/jogo.png";
import onebitflix from "../../../../assets/img/onebitflix.png";
import onebitx from "../../../../assets/img/onebitx.png";
import pokedex from "../../../../assets/img/pokedex.png";
import restaurante from "../../../../assets/img/restaurante.png";
import gitUser from "../../../../assets/img/gitUser.png";
import jokenpo from "../../../../assets/img/jokenpo.png";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import econverse from "../../../../assets/img/econverse.png";
import tirarVisto from "../../../../assets/img/tirarvisto.png";
import avanti from "../../../../assets/img/avanti.png";
import pet from "../../../../assets/img/pet.png";

const Projetos = [
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

const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      paddingTop: "20px",
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

  const [showAll, setShowAll] = useState(false);

  const primeirosProjetos = Projetos.slice(0, 6);
  const projetosExtras = Projetos.slice(6);

  // const scrollRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <StyledProjects id="project" ref={scrollRef}>
        <Container maxWidth="lg">
          <Typography
            color="primary.contrastText"
            variant="h1"
            textAlign="center"
            py={6}
          >
            Projetos
          </Typography>

          <motion.div
            style={{ margin: "0 20px" }}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", ease: "easeOut" }}
            viewport={{ root: scrollRef }}
          >
            <Grid container spacing={2} columns={{ xs: 2, md: 4 }} pb={0}>
              {primeirosProjetos.map((projeto, index) => (
                <Grid item xs={2} md={2} key={index}>
                  <StyledProject>
                    {/* ...conteúdo do projeto... */}
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
                      style={{ marginBottom: "2rem" }}
                    />
                    <Typography
                      color="primary.contrastText"
                      variant="body1"
                      textAlign="justify"
                    >
                      {projeto.description}
                    </Typography>
                    <Grid
                      container
                      display="flex"
                      justifyContent="center"
                      spacing={3}
                      my={2}
                    >
                      <Grid
                        item
                        xs={12}
                        md={4}
                        display="flex"
                        justifyContent="center"
                      >
                        <StyledButton
                          onClick={() => window.open(projeto.urlSite, "_blank")}
                        >
                          <Typography>Visitar projeto</Typography>
                        </StyledButton>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={4}
                        display="flex"
                        justifyContent="center"
                      >
                        <StyledButton
                          onClick={() => window.open(projeto.urlGit, "_blank")}
                        >
                          <Typography>GitHub</Typography>
                        </StyledButton>
                      </Grid>
                    </Grid>
                  </StyledProject>
                </Grid>
              ))}
            </Grid>
            {/* Botão para exibir mais projetos */}
            {!showAll && (
              <Grid container justifyContent="center" mt={4}>
                <Box mb={4} >

                <StyledButton
              onClick={() => {
                setShowAll(true);
                scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "center" } );
              }}
              
              >
                  <Typography>Ver mais projetos</Typography>
                </StyledButton>
              </Box>
              </Grid>
            )}
            {/* Exibe os projetos extras abaixo do botão */}
            {showAll && (
              <Grid
                container
                spacing={2}
                columns={{ xs: 2, md: 4 }}
                pb={5}
                mt={0}
              >
                {projetosExtras.map((projeto, index) => (
                  <Grid item xs={2} md={2} key={index + 6}>
                    <StyledProject>
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
                        style={{ marginBottom: "2rem" }}
                      />
                      <Typography
                        color="primary.contrastText"
                        variant="body1"
                        textAlign="justify"
                      >
                        {projeto.description}
                      </Typography>
                      <Grid
                        container
                        display="flex"
                        justifyContent="center"
                        spacing={3}
                        my={2}
                      >
                        <Grid
                          item
                          xs={12}
                          md={4}
                          display="flex"
                          justifyContent="center"
                        >
                          <StyledButton
                            onClick={() =>
                              window.open(projeto.urlSite, "_blank")
                            }
                          >
                            <Typography>Visitar projeto</Typography>
                          </StyledButton>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={4}
                          display="flex"
                          justifyContent="center"
                        >
                          <StyledButton
                            onClick={() =>
                              window.open(projeto.urlGit, "_blank")
                            }
                          >
                            <Typography>GitHub</Typography>
                          </StyledButton>
                        </Grid>
                      </Grid>
                    </StyledProject>
                  </Grid>
                ))}
              </Grid>
            )}
          </motion.div>
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;
