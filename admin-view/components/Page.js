import React from "react";
import { Box } from "@chakra-ui/react";

const Page = ({ children }) => {
  return (
    <>
      <Box as="main" style={{ minHeight: "100vh" }}>
        <Box as="div">{children}</Box>
      </Box>
    </>
  );
};

export default Page;
