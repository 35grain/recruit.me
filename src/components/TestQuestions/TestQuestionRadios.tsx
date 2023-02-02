import { Radio, Text } from "@nextui-org/react";

export const TestQuestionRadios = (props: { label: string, options: Array<string> }) => {
  return (
    <>
      <Text h4>{props.label}</Text>
      <Radio.Group orientation="horizontal">
        {props.options.map((option, index) => {
            return <Radio value={option} key={index}>{option}</Radio>
        })}
      </Radio.Group>
    </>
  );
};
