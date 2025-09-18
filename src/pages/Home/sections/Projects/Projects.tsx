import {  Container,  styled, Typography } from "@mui/material";
import Carrosel from "./Carrosel";


const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      paddingBottom: "30px",
    },
    [theme.breakpoints.up("md")]: {
      // >= mobile
      paddingBottom: "40px",
      height: "100%",
    },
  }));




  return (
    <>
      <StyledProjects id="project" >
        <Container maxWidth="lg">
          <Typography
            color="primary.contrastText"
            variant="h1"
            textAlign="center"
            py={6}
          >
            Projetos
          </Typography>

          <Carrosel />
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;
