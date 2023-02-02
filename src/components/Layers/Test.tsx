import { TestQuestionCheckboxes } from "../TestQuestions/TestQuestionCheckboxes";
import { TestQuestionLongText } from "../TestQuestions/TestQuestionLongText";
import { TestQuestionRadios } from "../TestQuestions/TestQuestionRadios";
import { TestQuestionShortText } from "../TestQuestions/TestQuestionShortText";
import { Layer } from "../Layer";
import { Spacer } from "@nextui-org/react";

export const Test = () => {
  return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflowY: "visible",
          height: "50vh",
        }}
      >
        <TestQuestionShortText label="What is your preferred programming language?" initialValue="TypeScript"/>
        <Spacer y={3} />
        <TestQuestionCheckboxes
          label={"What are the various data types present in JavaScript?"}
          options={["Function", "Null", "Boolean", "None"]}
        />
        <Spacer y={3} />
        <TestQuestionLongText label="How do you ensure code quality?" initialValue="By not writing shit code"/>
        <Spacer y={3} />
        <TestQuestionRadios
          label="Which came first?"
          options={["Chicken", "Egg"]}
        />
      </div>
  );
};
