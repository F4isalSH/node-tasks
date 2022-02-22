import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import theme from "./theme";

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Box>
  </ChakraProvider>
);
