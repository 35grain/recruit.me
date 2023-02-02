import {
  Card,
  Text,
  Container,
  Pagination,
  Button,
  Spacer,
  Link,
  Grid,
  Progress,
  Loading,
} from "@nextui-org/react";
import { useState } from "react";
import { ConfettiButton } from "./Buttons/ConfettiButton";
import { Profile } from "./Layers/Profile";
import { Task } from "./Layers/Task";
import { Test } from "./Layers/Test";
import { useRouter } from "next/router";

export const Layer = () => {
  const router = useRouter();
  const { jobName, company } = router.query;

  const [page, setPage] = useState(1);
  const [loadingResults, setLoadingResults] = useState(false);

  const pagesTotal = 4;

  const titles = ["Create Profile", "Test #1", "Task #1", "Done"];

  const handleNextPage = () => {
    if (page < pagesTotal-1) setPage(page + 1)
    else if (page === pagesTotal-1) {
      setLoadingResults(true);
      setTimeout(() => {
        setLoadingResults(false);
        setPage(page+1);
      }, 1500);
    }
  };

  return (
    <Container css={{ marginTop: "25px" }}>
      <Container css={{ padding: "0 22px" }}>
        <Text h2>
          {jobName} | {company}
        </Text>
      </Container>

      <Card css={{ padding: "10px", minHeight: "400px" }}>
        <Card.Header>
          <Text h3>{titles[page - 1]}</Text>
        </Card.Header>

        <Card.Body>
          {page === 1 && <Profile />}
          {page === 2 && <Test />}
          {page === 3 && <Task />}
          {page === 4 && (
            <>
              <Text h4>Good job! Your application has been approved 🥳. Now you can sit back and wait for a reply from {company}.</Text>
              <Spacer y={2} />
              <Text h4>Your results:</Text>
              <Grid.Container gap={2} justify="center" css={{ width: "50%" }}>
                <Grid xs={6}>
                  <Text b>Profile</Text>
                </Grid>
                <Grid xs={6}>
                  <Text b color="success">
                    Approved
                  </Text>
                </Grid>
                <Grid xs={6}>
                  <Text b>Test #1</Text>
                </Grid>
                <Grid xs={6} css={{ alignItems: "center" }}>
                  <Progress value={90} color="success" />
                </Grid>
                <Grid xs={6}>
                  <Text b>Task #1</Text>
                </Grid>
                <Grid xs={6} css={{ alignItems: "center" }}>
                  <Progress value={80} color="success" />
                </Grid>
              </Grid.Container>
            </>
          )}
        </Card.Body>

        <Card.Footer css={{ display: "flex", justifyContent: "flex-end" }}>
          {page !== pagesTotal ? (
            <ConfettiButton callback={handleNextPage} />
          ) : (
            <div style={{display: "flex", gap: 20}}>
            <Button
              size="lg"
              rounded
              as={Link}
              href="/"
              css={{
                minWidth: "auto",
              }}
            >
              My applications
            </Button>
            <Button
              size="lg"
              rounded
              as={Link}
              href="/#main"
              css={{
                minWidth: "auto",
              }}
            >
              Back to job offers
            </Button>
            </div>
          )}
        </Card.Footer>
        {loadingResults && (
          <Container
            css={{
              width: "100%",
              height: "100%",
              padding: 0,
              top: 0,
              left: 0,
              backgroundColor: "white",
              zIndex: 100,
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loading color="primary" size="lg" type="gradient">
              Loading results..
            </Loading>
          </Container>
        )}
      </Card>

      <Container
        css={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Pagination
          bordered
          page={page}
          onlyDots
          size="xl"
          total={pagesTotal}
          initialPage={1}
          controls={false}
        />
      </Container>
    </Container>
  );
};
