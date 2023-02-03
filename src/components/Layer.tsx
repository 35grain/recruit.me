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
import { Result } from "./Layers/Result";
import { useRouter } from "next/router";

export const Layer = () => {
  const router = useRouter();
  const { jobName, company } = router.query;

  const [page, setPage] = useState(1);
  const [loadingResults, setLoadingResults] = useState(false);

  const pagesTotal = 4;

  const titles = [
    "Create Profile",
    "Theoretical test #1",
    "Practical project #1",
    "Done",
  ];

  const handleNextPage = () => {
    if (page < pagesTotal - 1) setPage(page + 1);
    else if (page === pagesTotal - 1) {
      setLoadingResults(true);
      setTimeout(() => {
        setLoadingResults(false);
        setPage(page + 1);
      }, 1500);
    }
  };

  return (
    <Container>
      <Spacer y={2} />
      <Text h2>
        {jobName} | {company}
      </Text>

      <Card css={{ padding: "10px" }}>
        <Card.Header>
          <Text h3>{titles[page - 1]}</Text>
        </Card.Header>

        <Card.Body>
          {page === 1 && <Profile />}
          {page === 2 && <Test />}
          {page === 3 && <Task />}
          {page === 4 && <Result company={company as string} />}
        </Card.Body>

        <Card.Footer css={{ display: "flex", justifyContent: "flex-end" }}>
          {page !== pagesTotal ? (
            <ConfettiButton callback={handleNextPage} />
          ) : (
            <div style={{ display: "flex", gap: 20 }}>
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
                onClick={() => router.push("/")}
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
      <Spacer y={2} />
    </Container>
  );
};
