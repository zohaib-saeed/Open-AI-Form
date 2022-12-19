import React, { useState } from "react";
import { Tabs } from "@mantine/core";
import { BsMenuButtonWide as CompMode } from "react-icons/bs";
import { BsMenuButton as InsertMode } from "react-icons/bs";
import { BsMenuApp as EditMode } from "react-icons/bs";

import { useSidebarStyles } from "./Sidebar.styles";
import CompleteModeSidebar from "./CompleteMode/Sidebar";
import InsertModeSidebar from "./InsertMode/Sidebar";
import EditModeSidebar from "./EditMode/Sidebar";

const Sidebar = () => {
  const { classes } = useSidebarStyles();

  const [activeTab, setActiveTab] = useState<string | null>("complete");
  return (
    <div className={classes.container}>
      <div className={classes.headingTop}>Mode</div>
      <div className={classes.tabsWrapper}>
        <Tabs
          value={activeTab}
          onTabChange={setActiveTab}
          classNames={{ tabsList: classes.tabsList, tab: classes.tab }}
        >
          <Tabs.List>
            <Tabs.Tab value="complete">
              <CompMode />
            </Tabs.Tab>
            <Tabs.Tab value="insert">
              <InsertMode />
            </Tabs.Tab>
            <Tabs.Tab value="edit">
              <EditMode />
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="complete">
            <CompleteModeSidebar />
          </Tabs.Panel>
          <Tabs.Panel value="insert">
            <InsertModeSidebar />
          </Tabs.Panel>
          <Tabs.Panel value="edit">
            <EditModeSidebar />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Sidebar;
