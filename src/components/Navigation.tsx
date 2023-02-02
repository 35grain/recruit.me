import {
  Navbar,
  Button,
  Link,
  Image,
  Switch,
  useTheme,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { useRouter } from "next/router";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export const Navigation = () => {
  const router = useRouter();
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const handleConfetti = () => {
    confetti({
      angle: -40,
      origin: {
        x: 0.05,
        y: 0.05,
      },
      zIndex: 201,
      scalar: 1.2,
      spread: 70,
      drift: 4,
    });
    router.push("/");
  };

  // Uncomment code for automated confetti clicker

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     confetti({
  //       angle: -40,
  //       origin: {
  //         x: 0.05,
  //         y: 0.05,
  //       },
  //       zIndex: 201,
  //       scalar: 1.2,
  //       spread: 70,
  //       drift: 4,
  //     });
  //   }, 100);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Navbar
      isBordered
      variant="sticky"
      css={{
        $$navbarContainerMaxWidth: "100%",
      }}
    >
      <Navbar.Brand
        className="nav-brand"
        onClick={handleConfetti}
        css={{
          cursor: "pointer",
        }}
      >
        <Image src="/logo.svg" height={"auto"} width={"100px"} />
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item as={Link} onClick={() => router.push("/dashboard")}>
          Login
        </Navbar.Item>
        <Navbar.Item>
          <Button
            auto
            color="gradient"
            as={Link}
            onClick={() => router.push("/dashboard")}
          >
            Get started
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
