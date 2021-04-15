import {
  ButtonGroup,
} from "@fluentui/react-northstar";
import {
  OutdentIcon,
} from "@fluentui/react-icons-northstar";

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

const defaultTreeItems = [
  {
    id: '1',
    name: 'Navigation Item 1',
    children: [
      {
        id: '1.1',
        name: 'Sub Navigation Item 1',
        children: [
          {
            id: '1.1.1',
            name: 'Sub sub Navigation Item 1',
            children: []
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Navigation Item 2',
    children: [
      {
        id: '2.1',
        name: 'Sub Navigation Item 1',
        children: [],
      },
    ],
  },
  {
    id: '3',
    name: 'Navigation Item 3',
    children: [],
  },
];

export { administratorItems, settingsItems, defaultTreeItems }