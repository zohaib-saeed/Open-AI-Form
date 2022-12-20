import { createStyles } from "@mantine/core";

export const useSidebarStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gridGap: "8px",
    padding: "0rem 0rem",
  },
  headingTop: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    color: theme.colors.fonts[0],
    fontSize: `${theme.fontSizes.xs}px`,
    fontWeight: 400,
    marginBottom: "8px",
  },
  tabsWrapper: {
    width: "100%",
  },
  tabsList: {
    border: "none",
    backgroundColor: theme.colors.coolGray[0],
    borderRadius: "4px",
    marginBottom: "1rem",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tab: {
    borderRadius: "0px",
    padding: "8px 16px",
    "&:hover": {
      backgroundColor: "transparent",
      borderBottom: `2px soild ${theme.colors.lightGray[0]}`,
    },
    "&[data-active]": {
      padding: "8px 16px",
      borderBottom: `2px solid ${theme.colors.lightGray[0]}`,
    },
    "&[data-active]:hover": {
      padding: "8px 16px",
      borderBottom: `2px solid ${theme.colors.lightGray[0]}`,
    },
  },
  tooltip: {
    fontSize: `${theme.fontSizes.xs}px`,
  },
  scrollbar: {
    backgroundColor: theme.colors.blueGreen[0],
  },
}));
