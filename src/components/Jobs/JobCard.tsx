import { Card, Grid, Text, Badge, Row } from "@nextui-org/react";
import { JobModal } from "./JobModal";
import { Job } from "@/other/Types";
import { useState } from "react";

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  return (
    <>
      <Card
        isPressable
        isHoverable
        css={{ p: "$6",}}
        onPress={handlePress}
      >
        <Card.Header>
          <img
            alt="company logo"
            src={job.companyLogo}
            width="64px"
            height="64px"
            style={{ objectFit: "contain" }}
          />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                {job.title}
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: "$accents8" }}>{job.company}</Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body>
          {job.description ? job.description.substring(0, 100) + '...' : ''}
        </Card.Body>
        <Card.Footer>
          <Row>
            <Badge>{job.region}</Badge>
            {job.salary && <Badge>{job.salary}</Badge>}
            <Badge>Replies in {job.replyTime} days</Badge>
          </Row>
        </Card.Footer>
      </Card>
      <JobModal
        visible={isModalVisible}
        setVisible={setModalVisible}
        job={job}
        replyTime={job.replyTime}
      />
    </>
  );
};
