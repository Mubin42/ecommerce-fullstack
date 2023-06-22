import React from "react";
import { Box } from "@chakra-ui/react";
import Navigation from "./Navigation";

const Page = ({ children }) => {
  return (
    <>
      <Box as="main" style={{ minHeight: "100vh" }}>
        <Navigation />
        <Box as="div">{children}</Box>
      </Box>
    </>
  );
};

export default Page;
