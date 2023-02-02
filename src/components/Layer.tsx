import { Card, Text, Button, Container, Pagination } from "@nextui-org/react";
import { useState } from "react";

interface LayerProps {
  jobName: string;
  title: string;
  children: JSX.Element;
}

export const Layer = ({ jobName, title, children }: LayerProps) => {
  const [page, setPage] = useState(1);

  const pagesTotal = 6;

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
          <Text h3>{title}</Text>
        </Card.Header>
        <Card.Body>{children}</Card.Body>
        <Card.Footer>
          <Button onPress={handleNextPage}>Submit</Button>
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
        />
      </Container>
    </Container>
  );
};
