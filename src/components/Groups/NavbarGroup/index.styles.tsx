import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const LayoutGroupStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
  })
);

export default LayoutGroupStyles;
