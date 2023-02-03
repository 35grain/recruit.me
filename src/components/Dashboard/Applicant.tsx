import { Progress, Text, Avatar, Button, Spacer } from "@nextui-org/react";
import { useState, useEffect } from "react";

export const DashboardApplicant = (props: {
  name: string;
  rating: number;
  vacancy: string;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "gradient";
}) => {
  const [profileApproved, setProfileApproved] = useState(false);

  useEffect(() => {
    setProfileApproved(Math.random() >= 0.4);
  }, []);

  return (
    <div
      style={{
        padding: "10px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          text={props.name}
          color={props.color}
          textColor="white"
          css={{
            display: "inline-block",
          }}
        />
        <div
          style={{
            display: "inline-block",
            paddingLeft: "10px",
          }}
        >
          <Text
            h4
            css={{
              m: 0,
            }}
          >
            {props.name}
          </Text>
          <Text>{props.vacancy}</Text>
        </div>
      </div>
      <Text small>Profile</Text>
      <Text color={profileApproved ? "primary" : "error"}>
        {profileApproved ? "Approved" : "Rejected"}
      </Text>
      <Text small>Test #1 rating</Text>
      <Progress color="secondary" value={props.rating} />
      <Text small>Task #2 rating</Text>
      <Progress color="secondary" value={props.rating + 10} />
      <Spacer y={1} />
      <Button
        color="primary"
        css={{
          display: "inline",
        }}
      >
        Accept
      </Button>
      <Button
        color="error"
        css={{
          display: "inline",
          ml: "$4",
        }}
      >
        Reject
      </Button>
    </div>
  );
};
