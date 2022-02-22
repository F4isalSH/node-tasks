import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App: React.FC = () => (
  <ChakraProvider>
    <Box>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </Box>
  </ChakraProvider>
);
