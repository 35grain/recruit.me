import {
  Card,
  Text,
  Button,
  Container,
  Grid,
  Pagination,
} from "@nextui-org/react";
import { Select } from "@/components/Select";
import { useState } from "react";

export const CourseList = () => {
  const courses = [
    "Introduction to Git",
    "Javascript 101",
    "Styling website course",
    "Agile Development",
  ];

  const chapters = [
    "Intro",
    "Basic workflow",
    "Repositories",
    "Undo",
    "Working with branches",
    "Collaborating",
  ];

  return (
    <Container
      css={{
        display: "flex",
        justifyContent: "center",
        margin: "40px 0",
      }}
    >
      <Grid.Container justify="center" css={{ padding: 0, height: "700px" }}>
        <Grid xs={3} css={{ padding: 0 }}>
          <Button.Group
            size="lg"
            vertical
            flat
            css={{ width: "100%", margin: "0 20px 0 0" }}
          >
            {chapters.map((chapter, index) => (
              <Button key={index} css={{ justifyContent: "left" }}>
                {index}. {chapter}
              </Button>
            ))}
          </Button.Group>
        </Grid>
        <Grid xs={9}>
          <Card css={{ padding: 10 }}>
            <Card.Header>
              <Text h3>Introduction to Git</Text>
            </Card.Header>
            <Card.Body>
              <Text>
                Version control is one of the power tools of programming. It
                allows you to keep track of what you did when, undo any changes
                you decide you don't want, and collaborate at scale with other
                people. This course will introduce you to Git, a modern version
                control tool that is very popular with data scientists and
                software developers, and show you how to use it to get more done
                in less time and with less pain.
              </Text>
            </Card.Body>
            <Card.Footer css={{ justifyContent: "center" }}>
              <Pagination onlyDots size="xl" total={6} />
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>
  );
};
