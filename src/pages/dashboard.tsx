import Head from "next/head";
import { Inter } from "@next/font/google";
import { Container, Row, Col, Image, Text, Spacer, Button } from "@nextui-org/react";
import { JobList } from "@/components/JobList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Recruit.Me - Dashboard</title>
      </Head>
      <Container lg as="main">
        <JobList/>
      </Container>
    </>
  );
}
