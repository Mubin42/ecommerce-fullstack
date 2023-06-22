import Page from "@/components/Page";
import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Products() {
  return (
    <Page>
      <Flex mx={{ base: "16px", lg: "128px" }}>
        <Flex justify="flex-end" w="full">
          <Link href={"/products/new"}>
            <Button>Add A Product</Button>
          </Link>
        </Flex>
      </Flex>
    </Page>
  );
}
