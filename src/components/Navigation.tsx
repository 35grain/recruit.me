import { Navbar, Button, Link, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import confetti from "canvas-confetti";

export const Navigation = () => {
  const router = useRouter();
  const handleConfetti = () => {
    confetti({
      angle: -40,
      origin: {
        x: 0.055,
        y: 0.07,
      },
      zIndex: 201,
      scalar: 1.2,
      spread: 70,
      drift: 4,
    });
    router.push('/');
  };

  return (
    <Navbar
      isBordered
      variant="sticky"
      css={{
        $$navbarContainerMaxWidth: "100%",
      }}
    >
      <Navbar.Brand onClick={handleConfetti}>
        <Image src="/logo.svg" height={"auto"} width={"100px"} />
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item onClick={() => router.push('/dashboard')}>
          Login
        </Navbar.Item>
        <Navbar.Item>
          <Button auto flat color="gradient" as={Link} onClick={() => router.push('/dashboard')}>
            Get started
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
