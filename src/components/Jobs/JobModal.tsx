import React from "react";
import {
  Modal,
  Button,
  Text,
  Grid,
  Row,
  Badge,
  Collapse,
} from "@nextui-org/react";
import { Job } from "@/other/Types";

interface JobModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  job: Job;
  replyTime: number;
}

export const JobModal = ({ visible, setVisible, job }: JobModalProps) => {
  const handleOnClose = () => {
    setVisible(false);
  };

  const requirements = [
    "Blockchain, Ethereum, Smart Contract, Solidity, Web3",
    "Angular, ReactJS, React Native, Flutter,Vue",
    "NodeJS, Express, Laravel, Django",
    "SQL(MySQL,), NoSQL(MongoDB, CouchDB), Firebase",
    "HTML5, CSS, Sass/Less, Bootstrap",
    "PHP, Javascript, jQuery, DHTMLX, Typescript, D3.js, Socket.IO, Three.js",
    "Laravel, CI, Think PHP",
    "Webpack, Gulp, Babel",
    "UI/UX, Responsive Web Design",
  ];

  const courses = [
    "Introduction to Git",
    "Javascript 101",
    "Styling website course",
    "Agile Development",
  ];

  return (
    <Modal
      blur
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={handleOnClose}
      width="600px"
    >
      <Modal.Header>
        <Grid.Container gap={1}>
          <Grid xs={2}>
            <img
              alt="company logo"
              src={job.companyLogo}
              width="100%"
              height="100%"
              style={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid xs={10} direction="column" justify="flex-start">
            <Text h4 css={{ lineHeight: "$xs", textAlign: "left" }}>
              {job.title}
            </Text>
            <Text css={{ color: "$accents8", textAlign: "left" }}>{job.company}</Text>
          </Grid>
        </Grid.Container>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Badge>{job.region}</Badge>
          {job.salary && <Badge>{job.salary}</Badge>}
          <Badge>Replies in {job.replyTime} days</Badge>
        </Row>
        <Row justify="space-between">
          <Text size={16}>{job.description}</Text>
        </Row>
        <Collapse.Group>
          <Collapse title="Requirements">
            <ul style={{
              listStyle: "initial"
            }}>
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </Collapse>
          {/* <Collapse title="Suggested courses">
            <Container
              css={{
                display: "flex",
                gap: "10px",
                padding: 0,
              }}
            >
              {courses.map((course, index) => (
                <Button key={index}>{course}</Button>
              ))}
            </Container>
          </Collapse> */}
        </Collapse.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat onPress={handleOnClose}>
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
