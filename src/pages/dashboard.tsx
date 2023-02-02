import Head from "next/head";
import { Inter } from "@next/font/google";
import { Container, Progress, Grid, Card, Row, Col, Text } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Recruit.Me - Dashboard</title>
      </Head>
      <Container lg as="main">
        <h1>Recruitment dashboard</h1>
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <Text></Text>
                <Progress color="primary" value={75} />
              </Col>
              <Col>
              </Col>
              <Col>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
