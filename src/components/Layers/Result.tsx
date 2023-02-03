import { Text, Spacer, Grid, Progress } from "@nextui-org/react";

interface ResultProps {
  company: string;
}

export const Result = ({ company }: ResultProps) => {
  return (
    <>
      <Text h4>
        That's it! Your application has been submitted 🥳. Now sit back
        and wait for a reply from {company}.
      </Text>
      <Spacer y={2} />
      <Text h4>Your results:</Text>
      <Grid.Container gap={2} justify="center" css={{ width: "50%" }}>
        <Grid xs={6}>
          <Text b>Profile</Text>
        </Grid>
        <Grid xs={6}>
          <Text b color="success">
            Approved
          </Text>
        </Grid>
        <Grid xs={6}>
          <Text b>Theoretical test #1</Text>
        </Grid>
        <Grid xs={6} css={{ alignItems: "center" }}>
          <Progress value={90} color="success" />
        </Grid>
        <Grid xs={6}>
          <Text b>Practical project #1</Text>
        </Grid>
        <Grid xs={6} css={{ alignItems: "center" }}>
          <Progress value={80} color="success" />
        </Grid>
      </Grid.Container>
    </>
  );
};
