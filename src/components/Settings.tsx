import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import {
  Grid,
  Segment,
  Header,
  Flex,
  Label,
  Button,
  Input,
} from "@fluentui/react-northstar";
import { AddIcon, SearchIcon } from "@fluentui/react-icons-northstar";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useHistory } from "react-router-dom";
import LeftSegment from "./LeftSegment";

const Settings = () => {
  const history = useHistory();

  const [tree, setTreeItems] = useState([]);
  const [selectedItem, selectedTreeItem] = useState("");
  const [selectedItemText, selectedTreeItemText] = useState("");

  useEffect(() => {
    console.log("dd");
    let treeItems: any = window.localStorage.getItem("treeItems");
    if (treeItems) {
      let data: any = JSON.parse(treeItems);
      setTreeItems(data);
    }
  }, []);

  const onLabelItemClick = (e: any, id: string, text: string) => {
    e.preventDefault();
    selectedTreeItem(id);
    selectedTreeItemText(text);
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
          onLabelClick={(e) => {
            onLabelItemClick(e, treeItemData.id, treeItemData.name);
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
        onNodeToggle={(e) => {
          e.preventDefault();
        }}
      >
        {getTreeItemsFromData(treeItems)}
      </TreeView>
    );
  };

  const addTreeItem = () => {
    var treeItems: any = [];
    treeItems = [...tree];
    if (selectedItem == "") {
      var idNext = tree.length + 1;
      console.log(idNext);

      var nextItem: any = {
        id: `${idNext}`,
        name: `Navigation Item ${idNext}`,
        children: [],
      };

      treeItems.push(nextItem);
      setTreeItems(treeItems);
    } else {
      var lastIdText = "";
      if (selectedItem.includes(".")) {
        var lastChar = selectedItem.slice(selectedItem.length - 1);
        var nextId = parseInt(lastChar) + 1;
        lastIdText = `${nextId}`;
      } else {
        lastIdText = "1";
      }

      if (lastIdText == "1") {
        var nextItem: any = {
          id: `${selectedItem}.${lastIdText}`,
          name: `Sub Navigation Item ${
            treeItems[parseInt(selectedItem) - 1].children.length + 1
          }`,
          children: [],
        };

        treeItems[parseInt(selectedItem) - 1].children.push(nextItem);
      } else if (lastIdText == "2") {

        // var nextItem: any = {
        //   id: `${selectedItem}.${lastIdText}`,
        //   name: `Sub Navigation Item ${lastIdText}`,
        //   children: [],
        // };

        // treeItems[parseInt(selectedItem) - 1].children[
        //   parseInt(selectedItem) - 1
        // ].push(nextItem);
      }

      setTreeItems(treeItems);
    }
  };

  const discardChanges = () => {
    window.location.reload();
  };

  const saveData = () => {
    window.localStorage.setItem("treeItems", JSON.stringify(tree));
    window.location.reload();
  };

  return (
    <div>
      <Dashboard />
      <Grid columns="repeat(4, 1fr)" rows="600px">
        <LeftSegment />
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
            <Button content="Discard" onClick={discardChanges} />
            <Button primary content="Save" onClick={saveData} />
          </Flex>
        </Segment>
      </Grid>
    </div>
  );
};

export default Settings;
