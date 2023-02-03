import { TestQuestionLongText } from "../TestQuestions/TestQuestionLongText";
import { Spacer, Text, Container } from "@nextui-org/react";
import { FileUploader } from "../FileUploader";

export const Task = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        overflowY: "visible",
        minHeight: "50vh",
      }}
    >
      <Text h5>Prototype a web application for scheduling an appointment</Text>
      <Text>
        Given a CSV dataset that contains the active coaches and their weekly
        schedule of their available hours, Output the following User Stories:
      </Text>
      <ul>
        <Text>As a User, I want to see which coaches I can schedule with.</Text>
        <Text>
          As a User, I want to see what 30 minute timeslots are available to
          schedule with a particular coach.
        </Text>
        <Text>
          As a User, I want to book an appointment with a coach at one of their
          available times.
        </Text>
      </ul>

      <Text>
        {
          "You can't do it all. We respect your time, and expect that you will have to make choices and tradeoffs for what is in scope for your deliverable."
        }
      </Text>
      <Text>
        {
          "Don't worry about authentication. Assume a non-authenticated experience to keep things simple."
        }
      </Text>
      <Text>
        Pick your stack. Choose any libraries that help you produce the highest
        quality work in the time available.
      </Text>

      <Spacer y={1} />
      <TestQuestionLongText label="Comments" initialValue="The solution is located in this github repository: https://github.com/piuccio/cowsay"/>
      <Spacer y={1} />
      <FileUploader />
    </Container>
  );
};
