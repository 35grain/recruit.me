import Head from "next/head";
import { Inter } from "@next/font/google";
import { Hero } from "../components/Hero";
import { Container, Text } from "@nextui-org/react";
import { JobList } from "@/components/Jobs/JobList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Recruit.Me</title>
      </Head>
      <Hero />
      <main className="main-wrapper" id="main">
        <JobList />
      </main>
    </>
  );
}
