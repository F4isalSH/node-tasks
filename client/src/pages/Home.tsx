import {
  Box,
  Container,
  Heading,
  HStack,
  Button,
  Input,
  VStack,
} from "@chakra-ui/react";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Box h="100vh" bg="#F3F4F6">
      <Container pt={20}>
        <VStack bg="white" borderRadius="md" boxShadow="md" p={5} spacing={5}>
          <Heading textAlign="center">Task Manager</Heading>
          <HStack>
            <form>
              <Input placeholder="e.g wash dishes" />
              <Button
                _hover={{ bg: "purple.400" }}
                color="white"
                bg="purple.500"
              >
                Submit
              </Button>
            </form>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
