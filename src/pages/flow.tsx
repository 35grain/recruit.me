import Head from "next/head";
import { Inter } from "@next/font/google";
import { Container } from "@nextui-org/react";
import { Layer } from "@/components/Layer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Recruit.Me - Dashboard</title>
      </Head>
      <Container lg as="main">
        <Layer />
      </Container>
    </>
  );
}
