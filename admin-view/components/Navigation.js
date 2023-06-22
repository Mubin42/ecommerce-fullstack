import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SiSinglestore } from "react-icons/si";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { RiProductHuntLine } from "react-icons/ri";

export default function Navigation() {
  return (
    <Flex
      p="16px 128px"
      border="1px solid black"
      align="center"
      flexDir="space-between"
    >
      <Flex flex={1} gap="32px" align="center">
        <Box fontSize="50px">
          <SiSinglestore />
        </Box>
        <Link href="/">
          <Text fontSize="32px" fontWeight="700">
            Mubin's Store
          </Text>
        </Link>
      </Flex>
      <Flex flex={2} fontSize="24px" justify="space-evenly">
        <Flex align="center" gap="16px">
          <Box>
            <RxDashboard />
          </Box>
          <Link href="/">
            <Text>Dashboard</Text>
          </Link>
        </Flex>

        <Flex align="center" gap="16px">
          <Box>
            <RiProductHuntLine />
          </Box>
          <Link href="/products">
            <Text>Products</Text>
          </Link>
        </Flex>

        <Flex align="center" gap="16px">
          <Box>
            <AiOutlineShoppingCart />
          </Box>
          <Link href="/orders">
            <Text>Orders</Text>
          </Link>
        </Flex>

        <Flex align="center" gap="16px">
          <Box>
            <FiSettings />
          </Box>
          <Link href="/settings">
            <Text>Settings</Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
