import { Textarea, Text } from "@nextui-org/react";

export const TestQuestionLongText = (props: {label: string}) => {
  return (
    <>
      <Text h4>{props.label}</Text>
      <Textarea bordered />
    </>
  );
};
