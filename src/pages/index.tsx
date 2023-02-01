import Head from "next/head";
import { Inter } from "@next/font/google";
import { Hero } from "../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Recruit.Me</title>
      </Head>
      <Hero />
    </>
  );
}
