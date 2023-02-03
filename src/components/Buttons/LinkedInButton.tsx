import { Button, Image } from "@nextui-org/react";

export const LinkedInButton = () => {
  return (
    <Button css={{width: "150px"}} icon={<Image src="./linkedin_icon.svg" alt="LinkedIn"></Image>} color="secondary" auto>
      LinkedIn
    </Button>
  );
};
