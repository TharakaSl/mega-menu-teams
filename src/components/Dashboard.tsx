import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { defaultTreeItems } from "../utils/SidePanelData";
import RightPane from "./RightPane";

export const Dashboard: React.FC = () => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/"), [history]);
  const [tree, setTreeItems] = useState([]);

  useEffect(() => {
    var treeItems = window.localStorage.getItem("treeItems");
    //set defaultTree
    if (!treeItems) {
      let treeData: any = defaultTreeItems;
      setTreeItems(treeData);
      window.localStorage.setItem("treeItems", JSON.stringify(treeData));
    } else {
      var treeData = JSON.parse(treeItems);
      setTreeItems(treeData);
    }
  }, []);

  return (
    <div className="navbar">
      {tree.map((item: any, key) => {
        return (
          <div className="dropdown">
            <button className="dropbtn">
              {item.name}
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div
                  className="column left"
                  style={{ backgroundColor: "#aaa" }}
                >
                  <ul className="left-list">
                    {item.children.map((itemChild: any, keyVal: any) => {
                      return (
                        <li key={keyVal}>
                          <a>{itemChild.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="column right">
                  <div className="row">
                    <RightPane />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <a onClick={handleOnClick}>Settings</a>
    </div>
  );
};

export default Dashboard;
