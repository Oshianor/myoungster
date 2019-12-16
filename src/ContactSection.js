
import React from 'react';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    marginTop: -100,
    backgroundColor: "#fd385b",
    paddingTop: 50,
    paddingBottom: 50
  },
  Container: {
    display: "flex",
    // flexDirection: "row"
    justifyContent: "space-between",
    alignItems: "center"
  },
  contact: {
    borderRadius: 50,
    borderColor: "white",
    width: 175,
    height: 60,
    color: "white"
  },
  texts: {
    // display: "flex",
    // flexDirection: "column"
    color: "white"
  },
  text1: {
    color: "white"
  },
  text2: {
    color: "white",
    fontWeight: "500"
  },
  text3: {
    color: "white",
    fontWeight: "600"
  }
}));


export default function ContactSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          direction="row"
          spacing={16}
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={9} className={classes.joint}>
            {/* <div className={classes.texts}> */}
              <Typography variant="h6" className={classes.text1} >Seen enough?</Typography>
              <Typography variant="h4" className={classes.text2} >Interested Already?</Typography>
              <Typography variant="h2" className={classes.text3} >Get Started Today...</Typography>
            {/* </div> */}
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button
							variant="outlined"
              size="large"
              href="#contact"
              className={classes.contact}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}


{/* <Typography>Seen enough? Interested Already? Get Started Today</Typography>; */}