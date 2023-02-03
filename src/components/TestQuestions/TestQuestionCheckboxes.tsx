import { Checkbox, Text } from "@nextui-org/react";

export const TestQuestionCheckboxes = (props: {
  label: string;
  options: Array<string>;
}) => {
  return (
    <>
      <Text h4>{props.label}</Text>
      <Checkbox.Group orientation="vertical" defaultValue={[props.options[0]]}>
        {props.options.map((option, index) => {
          return <Checkbox value={option} key={index}>{option}</Checkbox>;
        })}
      </Checkbox.Group>
    </>
  );
};
