import { Navbar, Button, Link, Text } from "@nextui-org/react";
import confetti from 'canvas-confetti';

export const Navigation = () => {
    const handleConfetti = () => {
        confetti({
            angle: -45,
            origin: {
                x: 0.055,
                y: 0.07
            },
            zIndex: 201,
        });
      };
    
  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand
        onClick={handleConfetti}>
        <Text b color="#000">
          Recruit.Me
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="highlight-rounded">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Get started
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};