import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import {
  Layout,
  Grid,
  Segment,
  Header,
  Image,
  ButtonGroup,
  List
} from "@fluentui/react-northstar";
import { ApprovalsAppbarIcon } from "@fluentui/react-icons-northstar";

const actions = (
  <ButtonGroup
    buttons={[
      {
        icon: <ApprovalsAppbarIcon />,
        iconOnly: true,
        text: true,
        title: "Check",
        key: "check",
      }
    ]}
  />
);

const settingsItems = [
  {
    key: "step1",
    header: "Step 1",
    media: actions,
  },
  {
    key: "step2",
    header: "Step 2",
    media: actions,
  },
  {
    key: "step3",
    header: "Step 3",
    media: actions,
  },
];

const administratorItems = [
  {
    key: "licensing",
    header: "Licensing",
    media: actions,
  },
  {
    key: "administrators",
    header: "Administrators",
    media: actions,
  }
];

export const Settings: React.FC = () => {
  return (
    <div>
      <Dashboard />
      <Grid columns="repeat(4, 1fr)" rows="600px">
        <Segment
          styles={{
            gridColumn: "span 1",
            border: "1px",
          }}
        >
          <Header as="h3" content="Settings" />
          <List
            items={settingsItems}
          />
          <Header as="h3" content="Administration" />
          <List
            items={administratorItems}
          />
        </Segment>
        <Segment
          content="Content"
          styles={{
            gridColumn: "span 3",
          }}
        />
      </Grid>
    </div>
  );
};

export default Settings;
