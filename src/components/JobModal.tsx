import React from "react";
import {
  Modal,
  Button,
  Text,
  Grid,
  Row,
  Badge,
  Collapse,
  Container,
} from "@nextui-org/react";
import { Job } from "@/other/Types";

interface JobModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  job: Job;
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
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Badge>{job.region}</Badge>
          {job.salary && <Badge>{job.salary}</Badge>}
        </Row>
        <Row justify="space-between">
          <Text size={16}>{job.description}</Text>
        </Row>
        <Collapse.Group>
          <Collapse title="Requirements">
            {requirements.map((req, index) => (
              <Text key={index}>{req}</Text>
            ))}
          </Collapse>
          <Collapse title="Suggested courses">
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
          </Collapse>
        </Collapse.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={handleOnClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
