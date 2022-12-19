import { createStyles } from "@mantine/core";

export const useCompleteModeStyles = createStyles((theme) => ({
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
    maxHeight: "470px",
  },
  inputBox: {
    width: "100%",
    height: "100%",
    resize: "none",
    fontSize: `${theme.fontSizes.sm}px`,
    padding: "0.5rem 0.5rem",
    borderRadius: "4px",
    color: theme.colors.lightGray[0],
    border: `2px solid ${theme.colors.lightGray[0]}`,
    "&:focus": {
      border: `2px solid ${theme.colors.lightGray[0]}`,
      outline: "none",
    },
    "&::placeholder": {
      color: theme.colors.lightGray[0],
      fontSize: `${theme.fontSizes.xs}px`,
      display: "none",
    },
  },
  outputBoxSolid: {
    width: "100%",
    height: "100%",
    borderRadius: "4px",
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
