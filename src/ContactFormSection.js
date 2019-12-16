import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";



const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "100px 0px"
    // marginTop: 100,
    // marginBottom: 100
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%"
  },
  title: {
    flexGrow: 1,
		margin: "10px 0px",
		textAlign: "center",
    color: "#028cd6",
    fontWeight: "600"
  },
  TextField: {
    // maxWidth: 500
  },
  contact: {
    margin: "10px 0px",
    borderRadius: 20,
    backgroundColor: theme.palette.intermediate.main
  }
}));


const ContactFormSection = () => {
  const classes = useStyles();

	return (
    <div id="contact" className={classes.root}>
      <Container maxWidth="sm">
        <Typography variant="h3" className={classes.title}>
          Contact Us Today
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Full Name"
            // size="small"
            fullWidth
            margin="normal"
            className={classes.TextField}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Email Address"
            // size="small"
            fullWidth
            margin="normal"
            className={classes.TextField}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            // size="small"
            multiline
            rows={7}
            fullWidth
            margin="normal"
            className={classes.TextField}
            label="How can we help?"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.contact}
          >
            Yes Please. Send It
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default ContactFormSection;