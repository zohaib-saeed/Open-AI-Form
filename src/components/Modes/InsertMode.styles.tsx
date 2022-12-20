import { createStyles } from "@mantine/core";

export const useInsertModeStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex ",
    flexDirection: "column",
    gridGap: "1rem",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dataBoxWrapper: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "1rem",
    height: "100%",
    // maxHeight: "470px",
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      gridTemplateColumns: "1fr",
    },
  },

  btnRoot: {
    backgroundColor: theme.colors.blueGreen[0],
    fontSize: `${theme.fontSizes.sm}px`,
    "&:hover": {
      backgroundColor: theme.colors.blueGreen[0],
      opacity: "80%",
    },
  },

  textAreaRoot: {
    height: "100%",
    width: "100%",
  },
  textAreaWrapper: {
    height: "100%",
  },
  textAreaInput: {
    height: "100%",
    "&:focus": {
      borderColor: theme.colors.lightGray[0],
    },
  },
  disableTextAreaInput: {
    backgroundColor: theme.colors.lightGray[0],
  },

  btnWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  submitBtn: {
    padding: "8px 20px",
    borderRadius: "4px",
    color: theme.colors.fonts[1],
    transition: "all 0.3s ease",
    backgroundColor: theme.colors.blueGreen,
    border: "none",
    fontSize: `${theme.fontSizes.xs}px`,
    cursor: "pointer",
    "&:hover": {
      opacity: "85%",
    },
  },
}));
