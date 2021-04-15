import { Avatar, Flex, Header, List, Segment } from '@fluentui/react-northstar';
import React from 'react';
import ReactDOM from 'react-dom';
import { administratorItems, settingsItems } from "../utils/SidePanelData";

export const LeftSegment: React.FC = () => {
    return (
        <Segment
          styles={{
            gridColumn: "span 1",
            border: "1px",
          }}
        >
          <Flex gap="gap.small">
            <Avatar label="1" name="Settings" style={{ marginTop: "12px" }} />
            <Header as="h3" content="Settings" />
          </Flex>
          <List items={settingsItems} />
          <Flex gap="gap.small">
            <Avatar
              label="2"
              name="Administration"
              style={{ marginTop: "12px" }}
            />
            <Header as="h3" content="Administration" />
          </Flex>
          <List items={administratorItems} />
        </Segment>
    );
};

export default LeftSegment;