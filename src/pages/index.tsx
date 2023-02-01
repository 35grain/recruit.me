import Head from "next/head";
import { Inter } from "@next/font/google";
import { Hero } from "../components/Hero";
import { Container, Row, Col, Text, Spacer, Button } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Recruit.Me</title>
      </Head>
      <Hero />
      <main className="main-wrapper">
        <Container>
          <Row>
            <Col>
            Something something
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
