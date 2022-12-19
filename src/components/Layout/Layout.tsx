import React from "react";
import { useLayoutStyles } from "./Layout.styles";
import CompleteModeSidebar from "../Sidebar/CompleteMode/Sidebar";
import EditModeSidebar from "../Sidebar/EditMode/Sidebar";
import InsertModeSidebar from "../Sidebar/InsertMode/Sidebar";
import Sidebar from "../Sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { classes } = useLayoutStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.headingTop}>
        <p>Playground</p>
      </div>
      <div className={classes.container}>
        <div className={classes.left}>{children}</div>
        <div className={classes.right}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
