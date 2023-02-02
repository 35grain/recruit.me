import { Button, Image } from "@nextui-org/react";

export const EuropassButton = () => {
  return (
    <Button css={{width: "150px"}} icon={<Image width={30} src="./europe.svg"></Image>} color="secondary" auto>
      europass
    </Button>
  );
};
