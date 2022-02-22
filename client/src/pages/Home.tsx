import { Box, Container, Heading } from "@chakra-ui/react";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Container>
      <Box>
        <Heading textAlign="center">Task Manager</Heading>
      </Box>
    </Container>
  );
};
