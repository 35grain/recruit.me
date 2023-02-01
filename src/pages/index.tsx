import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Container, Row, Col } from '@nextui-org/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Recruit.Me</title>
      </Head>
      <Container lg as="main">
        Test
      </Container>
    </>
  )
}
