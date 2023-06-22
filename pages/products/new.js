import React, { useState } from "react";
import Page from "@/components/Page";
import { Flex, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
export default function NewProduct() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  return (
    <Page>
      <Flex flexDir="column" mx={{ base: "16px", lg: "128px" }} width="auto">
        <Stack gap="16px" mx="auto" w="720px">
          <FormControl>
            <FormLabel>Product Name</FormLabel>
            <Input type="text" value={input} onChange={handleInputChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input type="text" value={input} onChange={handleInputChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input type="number" value={input} onChange={handleInputChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={input} onChange={handleInputChange} />
          </FormControl>
        </Stack>
      </Flex>
    </Page>
  );
}
