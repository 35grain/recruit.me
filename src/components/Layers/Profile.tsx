import { Spacer, Text } from "@nextui-org/react";
import { LinkedInButton } from "../Buttons/LinkedInButton";

export const Profile = () => {
  return (
    <>
        <Text h5>Upload your CV</Text>
        <input type="file"/>
        <Spacer y={2} />
        <Text h5>or import personal info from LinkedIn</Text>
        <LinkedInButton/>
    </>
  );
};
