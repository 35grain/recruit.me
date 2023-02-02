import { Input, Text } from "@nextui-org/react";

export const TestQuestionShortText = (props: {label: string}) => {
  return (
    <>
      <Text h4>{props.label}</Text>
      <Input clearable bordered />
    </>
  );
};
