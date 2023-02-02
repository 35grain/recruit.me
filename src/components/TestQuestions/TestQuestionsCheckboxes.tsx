import { Checkbox, Text } from "@nextui-org/react";

export const TestQuestionCheckboxes = (props: {
  label: string;
  options: Array<string>;
}) => {
  return (
    <>
      <Text h4>{props.label}</Text>
      <Checkbox.Group orientation="horizontal">
        {props.options.map((option) => {
          return <Checkbox value={option}>{option}</Checkbox>;
        })}
      </Checkbox.Group>
    </>
  );
};
