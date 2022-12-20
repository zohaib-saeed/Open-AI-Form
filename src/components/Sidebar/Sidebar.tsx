import React, { useEffect } from "react";
import { Tabs, Tooltip, ScrollArea } from "@mantine/core";
import { BsMenuButtonWide as CompMode } from "react-icons/bs";
import { BsMenuButton as InsertMode } from "react-icons/bs";
import { BsMenuApp as EditMode } from "react-icons/bs";

import { useSidebarStyles } from "./Sidebar.styles";
import CompleteModeSidebar from "./CompleteMode/Sidebar";
import InsertModeSidebar from "./InsertMode/Sidebar";
import EditModeSidebar from "./EditMode/Sidebar";
import { useModeContext } from "../../Context/FormContext";

const Sidebar = () => {
  const { classes } = useSidebarStyles();
  const { mode, setMode } = useModeContext();

  // const [activeTab, setActiveTab] = useState<string | null>("complete");
  useEffect(() => {
    console.log(mode + "I am mode");
  }, [mode]);

  return (
    <div className={classes.container}>
      <div className={classes.headingTop}>Mode</div>
      <div className={classes.tabsWrapper}>
        <Tabs
          value={mode}
          onTabChange={setMode}
          classNames={{ tabsList: classes.tabsList, tab: classes.tab }}
        >
          <Tabs.List>
            <Tooltip
              label="Complete"
              withArrow
              classNames={{ tooltip: classes.tooltip }}
            >
              <Tabs.Tab value="complete">
                <CompMode />
              </Tabs.Tab>
            </Tooltip>
            <Tooltip
              label="Insert"
              withArrow
              classNames={{ tooltip: classes.tooltip }}
            >
              <Tabs.Tab value="insert">
                <InsertMode />
              </Tabs.Tab>
            </Tooltip>
            <Tooltip
              label="Edit"
              withArrow
              classNames={{ tooltip: classes.tooltip }}
            >
              <Tabs.Tab value="edit">
                <EditMode />
              </Tabs.Tab>
            </Tooltip>
          </Tabs.List>
          <ScrollArea style={{ height: 450 }} type="never" scrollbarSize={8}>
            <Tabs.Panel value="complete">
              <CompleteModeSidebar />
            </Tabs.Panel>
            <Tabs.Panel value="insert">
              <InsertModeSidebar />
            </Tabs.Panel>
            <Tabs.Panel value="edit">
              <EditModeSidebar />
            </Tabs.Panel>
          </ScrollArea>
        </Tabs>
      </div>
    </div>
  );
};

export default Sidebar;
