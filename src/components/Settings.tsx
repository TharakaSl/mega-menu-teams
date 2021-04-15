import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import {
  Grid,
  Segment,
  Header,
  List,
  Avatar,
  Flex,
  Label,
  Button,
  Input,
} from "@fluentui/react-northstar";
import { AddIcon, SearchIcon } from "@fluentui/react-icons-northstar";
import { administratorItems, settingsItems } from "../utils/SidePanelData";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ContactlessOutlined } from "@material-ui/icons";

const Settings = () => {
  const [tree, setTreeItems] = useState([]);
  const [selectedItem, selectedTreeItem] = useState('');
  const [selectedItemText, selectedTreeItemText] = useState('');

  useEffect(() => {
    console.log("dd");
    let treeItems: any = window.localStorage.getItem("treeItems");
    let data: any = JSON.parse(treeItems);
    setTreeItems(data);
  }, []);

  const setSelectedItem = (id: string, text: string) => {
    selectedTreeItem(id);
    selectedTreeItemText(text)
  };

  const getTreeItemsFromData = (treeItems: any) => {
    return treeItems.map((treeItemData: any) => {
      let children = undefined;
      if (treeItemData.children && treeItemData.children.length > 0) {
        children = getTreeItemsFromData(treeItemData.children);
      }
      return (
        <TreeItem
          key={treeItemData.id}
          nodeId={treeItemData.id}
          label={treeItemData.name}
          children={children}
          onClick={() => {
            setSelectedItem(treeItemData.id, treeItemData.name);
          }}
        />
      );
    });
  };

  const DataTreeView = ({ treeItems }: any) => {
    return (
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {getTreeItemsFromData(treeItems)}
      </TreeView>
    );
  };

  const addTreeItem = () => {
    var treeItems: any = [];
    treeItems = [...tree];
    if(selectedItem == '') {
      var idNext  = tree.length + 1;
      console.log(idNext);

      var nextItem: any = {
        id: `${idNext}`,
        name: `Navigation Item ${idNext}`,
        children: [],
      };

      treeItems.push(nextItem);
      setTreeItems(treeItems);

    } else {


      var lastIdText = '';
      if(selectedItem.includes('.')) {
        var lastChar = selectedItem.slice(selectedItem.length - 1);
        var aa = lastChar+1;
        console.log(aa);
      } else {
        lastIdText = '1';
      }

      var nextItem: any = {
        id: `${selectedItem}.${lastIdText}`,
        name: `Sub ${selectedItemText}`,
        children: [],
      };

      // treeItems.push(nextItem);
      // setTreeItems(treeItems);

      console.log(selectedItem);
    }
  }

  const saveData = () => {

  }

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
          <br />
          <br />
          <Flex gap="gap.small">
            <Button
              icon={<AddIcon />}
              primary
              content="Add Entry"
              iconPosition="before"
              onClick={addTreeItem}
            />
            <Input
              icon={<SearchIcon />}
              placeholder="Search for a navigation entry"
              width="1500px"
            />
          </Flex>
          <br />
          <DataTreeView treeItems={tree} />

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
