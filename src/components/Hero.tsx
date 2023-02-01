import {
  Container,
  Row,
  Col,
  Text,
  Spacer,
  Button,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/router";

export const Hero = () => {
  const router = useRouter();
  return (
    <section className="hero">
      <Container fluid>
        <Row>
          <Col
            css={{
              maxWidth: "650px",
            }}
          >
            <Text
              h1
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
              flat
              rounded
              as={Link}
              css={{
                minWidth: "auto",
              }}
              onClick={() => router.push("/dashboard")}
            >
              Get started
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
