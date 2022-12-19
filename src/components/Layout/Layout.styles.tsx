import { createStyles } from "@mantine/core";

export const useLayoutStyles = createStyles((theme) => ({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
    width: "100%",
    justifyItems: "center",
    padding: "2rem 2rem",
  },
  headingTop: {
    width: "100%",
    fontSize: `${theme.fontSizes.lg}px`,
    textAlign: "left",
    maxWidth: `${theme.breakpoints.xl}px`,
    fontWeight: 600,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "5fr 1fr",
    justifyContent: "space-between",
    gridGap: "12px",
    width: "100%",
    height: "100%",
    maxHeight: "550px",

    maxWidth: `${theme.breakpoints.xl}px`,
    backgroundColor: `${theme.colors.backgrounds[0]}`,
  },

  left: {
    width: "100%",
    height: "100%",
  },
  right: {
    width: "100%",
    height: "100%",
    paddingBottom: "2rem",
  },
}));
