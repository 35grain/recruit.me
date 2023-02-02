import { Button, Image } from "@nextui-org/react";

export const LinkedInButton = () => {
  return (
    <Button css={{width: "150px"}} icon={<Image src="./linkedin_icon.svg"></Image>} color="secondary" auto>
      Import
    </Button>
  );
};
