import { Textarea, Text } from "@nextui-org/react";

export const TestQuestionLongText = (props: {label: string, initialValue?: string}) => {
  return (
    <>
      <Text h4>{props.label}</Text>
      <Textarea bordered initialValue={props.initialValue}/>
    </>
  );
};
