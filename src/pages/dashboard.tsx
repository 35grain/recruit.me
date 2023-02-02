import Head from "next/head";
import { Inter } from "@next/font/google";
import { Container, Grid, Card, Text, Spacer, Button } from "@nextui-org/react";
import { DashboardApplicant } from "@/components/Dashboard/Applicant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Recruit.Me - Dashboard</title>
      </Head>
      <Spacer y={3} />
      <Container lg as="main">
        <Text h1>
          Recruitment dashboard for{" "}
          <Text as="span" color="warning">
            Swedbank AS
          </Text>
        </Text>
        <Card>
          <Card.Body>
            <Grid.Container
              gap={2}
              css={{
                p: 0,
              }}
            >
              <Grid xs={12} md={6} direction="column">
                <Text h3>Vacancies</Text>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Text
                    h4
                    css={{
                      m: 0,
                    }}
                  >
                    Software Engineer (Quality Assurance) - Baltic Factoring
                  </Text>
                  <Button
                    auto
                    color="secondary"
                    size="xs"
                    css={{
                      ml: "$3",
                    }}
                  >
                    Edit
                  </Button>
                </div>
                <Text>2 applicants</Text>
                <Spacer y={1} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Text
                    h4
                    css={{
                      m: 0,
                    }}
                  >
                    Junior Software Engineer (Java)
                  </Text>
                  <Button
                    auto
                    color="secondary"
                    size="xs"
                    css={{
                      ml: "$3",
                    }}
                  >
                    Edit
                  </Button>
                </div>
                <Text>3 applicants</Text>
              </Grid>
              <Grid xs={12} md={6} direction="column">
                <Text h3>4 applications</Text>
                <DashboardApplicant
                  name="Tõnis not Hendrik"
                  vacancy="Software Engineer (Quality Assurance) - Baltic Factoring"
                  color="error"
                  rating={90}
                />
                <DashboardApplicant
                  name="Maali Kuusk"
                  vacancy="Junior Software Engineer (Java)"
                  color="secondary"
                  rating={70}
                />
                <DashboardApplicant
                  name="Maali Kuusk"
                  vacancy="Software Engineer (Quality Assurance) - Baltic Factoring"
                  color="secondary"
                  rating={60}
                />
                <DashboardApplicant
                  name="Marcus Smith"
                  vacancy="Junior Software Engineer (Java)"
                  color="warning"
                  rating={30}
                />
                <DashboardApplicant
                  name="Silver Sepp"
                  vacancy="Junior Software Engineer (Java)"
                  color="primary"
                  rating={10}
                />
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Container>
      <Spacer y={3} />
    </>
  );
}
