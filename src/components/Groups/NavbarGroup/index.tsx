import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./index.styles";
import { SCHOOL } from "../../../constants/strings";
import {
  Link as RouterLink,
  // LinkProps as RouterLinkProps,
} from "react-router-dom";
// import { Omit } from "@material-ui/types";

interface Props {
  sample?: string;
}

const links = [
  {
    label: "Check In",
    to: "/",
  },
  {
    label: "Families",
    to: "/families",
  },
  {
    label: "Add Family",
    to: "/add-family",
  },
];

// const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, "to">>(
//   (props, ref) => (
//     <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
//   )
// );

const NavbarGroup = (props: Props) => {
  const classes = useStyles();
  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  const [open, setOpen] = React.useState(false);

  const handleMenu = (close?: boolean) => {
    if (close) {
      setOpen(false);
    } else {
      setOpen((status) => !status);
    }
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <>
      <Drawer
        open={open}
        onClose={() => {
          handleMenu(true);
        }}
      >
        <div className={classes.list} role="presentation">
          <List>
            {links.map((link) => (
              <div key={link.to}>
                <ListItem
                  onClick={() => {
                    handleMenu(true);
                  }}
                  component={RouterLink}
                  to={link.to}
                  button
                >
                  <ListItemText primary={link.label} />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </div>
      </Drawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              handleMenu();
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {SCHOOL}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavbarGroup;
