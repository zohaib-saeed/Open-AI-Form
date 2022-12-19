import { createStyles } from "@mantine/core";

export const useEditSidebarStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gridGap: "8px",
  },
  // select box styles
  selectLabel: {
    color: theme.colors.fonts[0],
    fontSize: `${theme.fontSizes.xs}px`,
    fontWeight: 400,
    marginBottom: "8px",
  },
  selectInputWrapper: {
    border: `2px solid ${theme.colors.lightGray[0]}`,
    padding: "6px 8px",
    color: theme.colors.fonts[0],
    fontSize: `${theme.fontSizes.xs}px`,
    fontWeight: 400,
    "&:focus": {
      border: `2px solid ${theme.colors.lightGray[0]}`,
    },
  },
  selectDropdownItem: {
    padding: "6px 8px",
  },
  selectRoot: {
    width: "100%",
  },
  // tempreture wrapper
  tempratureWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gridGap: "8px",
  },
  tempratureTopWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tempratureLabel: {
    color: theme.colors.fonts[0],
    fontSize: `${theme.fontSizes.xs}px`,
    fontWeight: 400,
    marginBottom: "8px",
    lineHeight: "0px",
  },
  tempInput: {
    maxWidth: "45px",
    color: theme.colors.fonts[0],
    fontSize: `${theme.fontSizes.xs}px`,
    fontWeight: 400,
    border: "0px",
    transition: "all 0.3s ease",
    "&:focus": {
      border: `2px solid ${theme.colors.lightGray[0]}`,
    },
    "&:hover": {
      border: `2px solid ${theme.colors.lightGray[0]}`,
    },
  },
  tempSliderRoot: {
    width: "100%",
  },
  // maximum length wrapper
  maxLengthWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gridGap: "8px",
  },
  maxLengthTopWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  maxLengthLabel: {
    color: theme.colors.fonts[0],
    fontSize: `${theme.fontSizes.xs}px`,
    fontWeight: 400,
    marginBottom: "8px",
    lineHeight: "0px",
  },
  maxLengthInput: {
    maxWidth: "45px",
    color: theme.colors.fonts[0],
    fontSize: `${theme.fontSizes.xs}px`,
    fontWeight: 400,
    border: "0px",
    transition: "all 0.3s ease",
    "&:focus": {
      border: `2px solid ${theme.colors.lightGray[0]}`,
    },
    "&:hover": {
      border: `2px solid ${theme.colors.lightGray[0]}`,
    },
  },
  maxLengthSliderRoot: {
    width: "100%",
  },
  // enter sequence
  enterSequenceWrapper: {
    width: "100%",
  },
  stopSeqInput: {
    border: `2px solid ${theme.colors.lightGray[0]}`,
    padding: "6px 8px",
    color: theme.colors.fonts[0],
    fontSize: `${theme.fontSizes.xs}px`,
    fontWeight: 400,
    "&:focus": {
      border: `2px solid ${theme.colors.lightGray[0]}`,
    },
  },
  stopSeqLabel: {
    color: theme.colors.fonts[0],
    fontSize: `${theme.fontSizes.xs}px`,
    fontWeight: 400,
    marginBottom: "1.5rem",
    lineHeight: "0px",
  },
}));
