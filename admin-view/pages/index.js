import { Button, Flex, Text } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);
  if (!session) {
    return (
      <Flex justify="center" align="center">
        <Button
          onClick={() => {
            signIn("github");
          }}
        >
          Sign In
        </Button>
      </Flex>
    );
  } else {
    router.push("/home");
    return (
      <Flex justify="center" align="center">
        logged in {session.user.email}
      </Flex>
    );
  }
}
