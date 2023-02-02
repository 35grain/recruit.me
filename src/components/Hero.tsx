import {
  Container,
  Row,
  Col,
  Text,
  Spacer,
  Button,
  Link,
} from "@nextui-org/react";

export const Hero = () => {
  return (
    <section className="hero">
      <Container fluid>
        <Row>
          <Col
            css={{
              maxWidth: "50%",
            }}
          >
            <Text
              h1
              size={60}
              css={{
                display: "inline",
                lineHeight: 1.2,
              }}
            >
              Looking for a
              <Text
                as="span"
                css={{
                  textGradient: "45deg, $primary -20%, $blue600 50%",
                  display: "inline",
                }}
              >
                {" "}
                dream career{" "}
              </Text>
              in IT but don't know where to start?
            </Text>
            <Text size="$xl"><b>Recruit.<Text as="span" color="primary">ME</Text></b> helps you get up to speed in no time! 🚀</Text>
            <Spacer y={1} />
            <Button
              size="lg"
              color="gradient"
              rounded
              as={Link}
              href="#main"
              css={{
                minWidth: "auto",
              }}
            >
              Get started
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
