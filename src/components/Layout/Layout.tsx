import React, { useState } from "react";
import { useLayoutStyles } from "./Layout.styles";
import Sidebar from "../Sidebar/Sidebar";
import { Burger, Drawer } from "@mantine/core";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { classes } = useLayoutStyles();
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.headingTop}>
          <p>Playground</p>
          <div className={classes.hamburger}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
            />
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.left}>{children}</div>
          <div className={classes.right}>
            <Sidebar />
          </div>
        </div>
      </div>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        // title="Mode"
        padding="sm"
        size="md"
      >
        <Sidebar />
      </Drawer>
    </>
  );
};

export default Layout;
