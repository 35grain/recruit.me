import {
    Container,
    Row,
    Col,
    Text,
    Spacer,
    Button,
  } from "@nextui-org/react";

export const Hero = () => {
    return (
        <div className="hero">
        <Container lg as="main">
          <Spacer y={3} />
          <Row>
            <Col>
              <Text
                h1
                css={{
                  display: "inline",
                }}
              >
                Looking for a
              </Text>
              <Text
                h1
                css={{
                  textGradient: "45deg, $primary -20%, $blue600 50%",
                  display: "inline",
                }}
              >
                {" "}
                dream career{" "}
              </Text>
              <Text
                h1
                css={{
                  display: "inline",
                  lineHeight: 1.2,
                }}
              >
                in IT but don't know where to start?
              </Text>
              <Text size="$xl">Something something</Text>
              <Spacer y={1} />
              <Button
                size="lg"
                color="gradient"
                animated
                css={{
                  minWidth: "auto",
                }}
              >
                Get started
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
}