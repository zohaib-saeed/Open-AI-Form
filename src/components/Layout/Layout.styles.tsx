import { createStyles } from "@mantine/core";

export const useLayoutStyles = createStyles((theme) => ({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
    width: "100%",
    justifyItems: "center",
    padding: "1rem 2rem 2rem 2rem",
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: "1rem",
    },
  },
  headingTop: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: `${theme.fontSizes.lg}px`,
    textAlign: "left",
    maxWidth: `${theme.breakpoints.xl}px`,
    fontWeight: 600,
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      lineHeight: "15px",
    },
  },
  hamburger: {
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      display: "none",
    },
  },

  container: {
    display: "grid",
    gridTemplateColumns: "5fr 1fr",
    justifyContent: "space-between",
    gridGap: "1.5rem",
    width: "100%",
    height: "100%",
    maxHeight: "580px",
    maxWidth: `${theme.breakpoints.xl}px`,
    backgroundColor: `${theme.colors.backgrounds[0]}`,

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      gridTemplateColumns: "1fr",
    },
  },

  left: {
    width: "100%",
    height: "100%",
    [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
      height: "600px",
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      height: "470px",
    },
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      height: "550px",
    },
  },
  right: {
    width: "100%",
    height: "100%",
    padding: "4px 8px",
    border: `2px solid ${theme.colors.lightGray[0]}`,
    borderRadius: "4px",
    paddingBottom: "1rem",
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      display: "none",
    },
  },
}));
