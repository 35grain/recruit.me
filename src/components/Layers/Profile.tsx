import { Spacer, Text, Container } from "@nextui-org/react";
import { EuropassButton } from "../Buttons/EuropassButton";
import { LinkedInButton } from "../Buttons/LinkedInButton";
import { FileUploader } from "../FileUploader";

export const Profile = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        overflowY: "visible",
      }}
    >
        <Text h5>Upload your CV</Text>
        <FileUploader/>
        <Spacer y={2} />
        <Text h5>Or import your personal info from:</Text>
        <Container css={{padding: 0, display: "flex", gap: 20}}>
        <LinkedInButton/>
        <EuropassButton/>
        </Container>
    </Container>
  );
};
