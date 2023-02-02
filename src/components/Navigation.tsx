import {
  Navbar,
  Button,
  Link,
  Image,
  Avatar,
  Dropdown,
  Text,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export const Navigation = () => {
  const router = useRouter();
  const handleConfetti = () => {
    confetti({
      angle: -40,
      origin: {
        x: 0.05,
        y: 0.05,
      },
      zIndex: 301,
      scalar: 1.2,
      spread: 70,
      drift: 4,
    });
    router.push("/");
  };

  const automatedConfetti = false;

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (automatedConfetti) {
      interval = setInterval(() => {
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
      }, 100);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <Navbar
      isBordered
      variant="sticky"
      css={{
        $$navbarContainerMaxWidth: "100%",
        zIndex: 300,
      }}
    >
      <Navbar.Brand
        className="nav-brand"
        onClick={handleConfetti}
        css={{
          cursor: "pointer",
        }}
      >
        <Image src="/logo.svg" height={"32px"} width={"auto"} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Content gap={10}>
        {router.pathname !== "/dashboard" ? (
          <>
            <Navbar.Item>
              <Button
                auto
                color="secondary"
                bordered
                as={Link}
                onClick={() => router.push("/dashboard")}
                css={{
                  boxSizing: "border-box !important",
                }}
              >
                Login
              </Button>
            </Navbar.Item>
            <Navbar.Item>
              <Button
                auto
                color="gradient"
                as={Link}
                onClick={() => router.push("/#main")}
              >
                Get started
              </Button>
            </Navbar.Item>
          </>
        ) : (
          <>
            <Dropdown placement="bottom-right">
              <Dropdown.Trigger>
                <Avatar
                  text="Swedbank AS"
                  color="warning"
                  textColor="white"
                  css={{
                    display: "inline-block",
                  }}
                />
              </Dropdown.Trigger>
              <Dropdown.Menu
                color="primary"
                disabledKeys={["help_and_feedback", "vacancies"]}
                aria-label="Actions" onAction={() => router.push('/')}
              >
                <Dropdown.Item key="dashboard">Dashboard</Dropdown.Item>
                <Dropdown.Item key="vacancies">Vacancies</Dropdown.Item>
                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item>
                <Dropdown.Item key="logout" color="error" withDivider>
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        )}
      </Navbar.Content>
    </Navbar>
  );
};
