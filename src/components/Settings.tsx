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
  List,
  Avatar,
  Flex,
  Label,
  Button,
  Input,
  Tree,
} from "@fluentui/react-northstar";
import { OutdentIcon, AddIcon, SearchIcon, TriangleDownIcon, TriangleEndIcon} from "@fluentui/react-icons-northstar";

const actions = (
  <ButtonGroup
    buttons={[
      {
        icon: <OutdentIcon />,
        iconOnly: true,
        text: true,
        title: "Check",
        key: "check",
      },
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
  },
];

const treeItems = [
  {
    id: 'nav-1',
    title: 'Navigation Item 1',
    items: [
      {
        id: 'sub-nav-1',
        title: 'Sub Navigation Item 1',
        items: [
          {
            id: 'sub-sub-nav-1',
            title: 'Sub sub Navigation Item 1',
          },
        ],
      },
    ],
  },
  {
    id: 'nav-2',
    title: 'Navigation Item 2',
    items: [
      {
        id: 'sub-nav-2',
        title: 'Sub Navigation Item 2',
      },
    ],
  },
]

const titleRenderer = (Component: any, { content, expanded, open, hasSubtree, ...restProps } : any) => (
  <Component expanded={expanded} hasSubtree={hasSubtree} {...restProps}>
    {expanded ? <TriangleDownIcon /> : <TriangleEndIcon />}
    {content}
  </Component>
)

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
        <Segment
          content="Content"
          styles={{
            gridColumn: "span 3",
          }}
        >
          <Header as="h3" content="Configure Navigation" />
          <Label color="white" content="The Mega Menu can be configured here" />
          <Header as="h4" content="Add Navigation entries" />
          <Label
            color="white"
            content="Here is an example of how a section can be used to group inputs"
          />
          <br/><br/>
          <Flex gap="gap.small" >
            <Button icon={<AddIcon />} primary content="Add Entry" iconPosition="before"/>
            <Input icon={<SearchIcon />} placeholder="Search for a navigation entry" width= "1500px" />
          </Flex>
          <br/>
          <Tree aria-label="Navigation Entries" items={treeItems} renderItemTitle={titleRenderer} />
          <Flex gap="gap.small" style={{ float: "right" }}>
            <Button content="Discard" />
            <Button primary content="Save" />
          </Flex>
        </Segment>
      </Grid>
    </div>
  );
};

export default Settings;
