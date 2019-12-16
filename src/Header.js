import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  AppBar: { backgroundColor: "white" },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.main
  },
  img: {
    width: 45
  },
  contact: {
    borderRadius: 20,
    // backgroundImage: "linear-gradient(to right, #ff8a58, #fd385b)"
    backgroundColor: theme.palette.intermediate.main
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" elevation={0} className={classes.AppBar}>
      <Container>
        <Toolbar>
          <img src="/static/logo.png" className={classes.img} />
          <Typography variant="h6" className={classes.title}>
            YOUNGSTER
          </Typography>
          <Button color="secondary" 
            href="#contact"
          >Home</Button>
          <Button color="secondary" 
            href="#contact"
          >Features</Button>
          <Button color="secondary" 
            href="#contact"
          >About</Button>
          <Button color="secondary" href="#faq">
            Faq
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href="#contact"
            className={classes.contact}
          >
            Contact Us
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
