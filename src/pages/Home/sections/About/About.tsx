import {  Container, Grid, styled, Typography } from "@mui/material";
import theme from "../../../../theme";
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { motion } from "motion/react"
import { useRef } from "react";


const About = () => {
    const StyledAbout = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.contrastText,
        width: '100%',
        [theme.breakpoints.up('xs')]:{ // <= mobile
            paddingTop: '20px',
            height: '100%',
            paddingBottom: '20px'
        },
        [theme.breakpoints.up('md')]:{ // <= mobile
            height: '100%',
            minHeight: '100vh',
            paddingTop: '40px',
            paddingBottom: '40px'
        },
        
        
      }));
      
      const scrollRef = useRef(null)

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
        <StyledAbout id="sobre" >
            <Container maxWidth="lg"  >
            <Typography color="primary" variant="h1" textAlign="center" py={6}>Sobre mim</Typography>
                <Grid container spacing={2} justifyContent={'center'} pb={4}>
                     <Grid item >
                     <motion.div

            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, }}
            transition={{duration: 0.5, ease: "easeOut"}}
            viewport={{ root: scrollRef }}
            >

            
                <StyledGrid>
                        <WorkspacePremiumIcon/>
                    <Typography fontWeight="600" variant="h5" >Experiencia</Typography>
                    <Typography variant="body1" >7 anos</Typography>
                    <Typography variant="body1" >Sub-Gerente em Restaurante</Typography>
                </StyledGrid>
                </motion.div>
                    </Grid>
                    <Grid item>
                    <motion.div
            initial={{ opacity: 0, scale: 0,  }}
            whileInView={{ opacity: 1, scale: 1, }}
            transition={{duration: 0.5, ease: "easeOut"}}
            viewport={{ root: scrollRef }}
            >
                <StyledGrid>
                    <SchoolIcon/>
                    <Typography fontWeight="600" variant="h5" textAlign="center" >Escolaridade</Typography>
                    <Typography variant="body1" textAlign="center">Tecnologia</Typography>
                    <Typography variant="body1" textAlign="center">Analise e desenvolvimento de sistemas</Typography>
                </StyledGrid>
                </motion.div>
                    </Grid>
                </Grid>
                <Typography color="primary" variant="body1" fontSize={19} textAlign="justify" py={4}>
                Olá! Sou o Fernando Barbosa, tenho 26 anos e estou em transição de carreira para a área de Desenvolvimento Web. Atualmente curso Análise e Desenvolvimento de Sistemas na UNINOVE e me especializo em JavaScript, HTML, CSS, TypeScript, React e Next.js, com foco no desenvolvimento de interfaces modernas, responsivas e com excelente experiência para o usuário. <br /><br />

Tenho uma rotina intensa de estudos práticos, projetos pessoais e cursos complementares, como a formação Full Stack JavaScript pela OneBit Code. Ao longo dessa jornada, venho aplicando versionamento com Git, consumo de APIs REST, componentização com React, manipulação de DOM e estilização com CSS moderno (Flexbox, Grid, media queries, variáveis e responsividade). Estou constantemente buscando aprimorar boas práticas de código, organização e usabilidade.<br /><br />

Antes de ingressar na tecnologia, atuei por quase 7 anos na hamburgueria Smart Burger, onde iniciei como copeiro e fui promovido a subgerente. Essa trajetória me proporcionou um forte senso de responsabilidade, liderança e visão operacional. Como subgerente, fui responsável por:<br /><br />

- Supervisionar toda a operação do salão e do delivery, garantindo eficiência e qualidade no atendimento ao cliente;<br />
- Criar e otimizar rotas de entrega, reduzindo o tempo dos motoboys e melhorando a experiência do cliente final;<br />
- Realizar o controle de estoque, inventário e pedidos, utilizando planilhas para manter a operação sempre abastecida;<br />
- Coordenar equipes multidisciplinares, promovendo uma rotina de trabalho fluida e colaborativa;<br />
- Gerenciar o caixa e a parte financeira da loja utilizando o sistema ERP Eclética, com lançamentos, fechamentos diários e geração de relatórios.<br />
- Treinamento e integração: participei ativamente da formação de novos funcionários, alinhando o time aos padrões da empresa.<br /><br />

Essa vivência me preparou para lidar com pressão, resolução de problemas, gestão de pessoas e processos, além de desenvolver um olhar estratégico para eficiência e inovação, habilidades que agora levo comigo para minha atuação como desenvolvedor.<br /><br />

Hoje, minha maior motivação está em transformar ideias em interfaces funcionais, acessíveis e bem construídas, contribuindo com projetos que impactem positivamente a vida das pessoas. Estou em busca da minha primeira oportunidade como Desenvolvedor Front-End, pronto para colaborar com times engajados, aprender continuamente e crescer na área de tecnologia.
                </Typography>
                <hr />
                <Typography color="primary" variant="h1" textAlign="center" id='skills' py={6}>Habilidades</Typography>
                <motion.div
            initial={{ opacity: 0, y: 100, }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{duration: 0.5, ease: "easeOut"}}
            viewport={{ root: scrollRef }}
            >
                    <Grid container spacing={2}  columns={{ xs: 4, md: 8 }} pb={5} >
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
                    </motion.div>
            </Container>
        </StyledAbout>
      </>
    )
  }
  
  export default About
  