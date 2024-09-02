import { Container, Divider, Stack } from "@mui/material";
import { Header } from "../containers/Header";
import { Skills } from "../containers/Skills";
import { Experience } from "../containers/Experience";
import Projects from "../containers/Projects";
import { Education } from "../containers/Education";

export function Home() {

  return (
    <Container maxWidth="lg" sx={{ padding: "30px" }}>
      <Stack spacing={2}>

        <Header />

        <Divider />

        <Skills />

        <Divider />

        <Experience />

        <Divider />

        <Projects />

        <Divider />

        <Education />
      </Stack>
    </Container>
  );
}