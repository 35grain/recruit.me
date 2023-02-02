import { Layer } from "../Layer";
import { Spacer, Text } from "@nextui-org/react";
import { LinkedInButton } from "../Buttons/LinkedInButton";

interface ProfileProps {
  jobName: string;
  title: string;
}

export const Profile = ({ jobName, title }: ProfileProps) => {
  const handleFileChange = () => {
    console.log();
  };

  return (
    <Layer jobName={jobName} title={title}>
      <>
        <Text h5>Upload your CV</Text>
        <input type="file" onChange={handleFileChange} />
        <Spacer y={2} />
        <Text h5>or import personal info from LinkedIn</Text>
        <LinkedInButton/>
      </>
    </Layer>
  );
};
