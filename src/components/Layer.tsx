import {
  Card,
  Text,
  Container,
  Pagination,
  Button,
  Spacer,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import { ConfettiButton } from "./Buttons/ConfettiButton";
import { Profile } from "./Layers/Profile";
import { Task } from "./Layers/Task";
import { Test } from "./Layers/Test";
import { useRouter } from "next/router";

export const Layer = () => {
  const router = useRouter();
  const { jobName } = router.query;

  const [page, setPage] = useState(1);

  const pagesTotal = 4;

  const titles = ["Create Profile", "Test #1", "Task #1", "Done"];

  const handleNextPage = () => {
    if (page < pagesTotal) setPage(page + 1);
  };

  return (
    <Container css={{ margin: "50px 0" }}>
      <Container css={{ padding: "0 22px" }}>
        <Text h2>{jobName}</Text>
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
              <Text>Good job! Your application was sent.</Text>
              <Spacer y={2} />
            </>
          )}
        </Card.Body>

        <Card.Footer css={{ display: "flex", justifyContent: "flex-end" }}>
          {page !== pagesTotal ? (
            <ConfettiButton callback={handleNextPage} />
          ) : (
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
          )}
        </Card.Footer>
      </Card>

      <Container
        css={{ display: "flex", justifyContent: "center", margin: "20px" }}
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
