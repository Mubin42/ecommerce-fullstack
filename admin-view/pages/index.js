import Page from "@/components/Page";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <Flex justify="center" align="center">
        <Button onClick={() => signIn("github")}>Sign In</Button>
      </Flex>
    );
  }

  return (
    <Flex justify="center" align="center">
      logged in {session.user.email}
    </Flex>
  );
}
