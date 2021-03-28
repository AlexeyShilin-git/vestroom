import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#eae0ec",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "3rem",
    fontFamily: "sans-serif	",
    textShadow: "3px 3px 3px grey",
  },
  titleLastName: {
    fontFamily: "cursive",
    fontSize: "1.5rem",
    fontStyle: "italic",
    textShadow: "3px 3px 3px grey",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h1" className={classes.title}>
            Vestroom <span className={classes.titleLastName}>beauty studio</span>
          </Typography>
          <Typography className={classes.titleLastName}>
            +7 (123) 456-78-90
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
