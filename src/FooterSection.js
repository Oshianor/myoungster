
import React from 'react';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    marginTop: -100,
    backgroundColor: theme.palette.primary.main,
    paddingTop: 50,
    paddingBottom: 50
  },
  avatar: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  avatarItem: {
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    border: '1px solid white'
  },
  firstAvaterPosition:{
    marginLeft: '20%',
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    border: '1px solid white'
  },
  text1: {
    color: "white",
    display: "flex",
    
  },
  
}));


export default function FooterSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={6} className={classes.avatar}>
        <Avatar className={ classes.firstAvaterPosition}>
          <CameraAltIcon  />
        </Avatar>
        <Avatar className={classes.avatarItem}>
          <TwitterIcon />
        </Avatar>
        <Avatar className={classes.avatarItem}>
          <FacebookIcon />
        </Avatar>
      </Grid>
      <Grid item xs={2}>
      <Typography variant="h5" className={classes.text1} >QUICK LINKS</Typography>
      <Typography variant="body1" className={classes.text1} >Features</Typography>
      <Typography variant="body1" className={classes.text1} >About Us</Typography>
      <Typography variant="body1" className={classes.text1} >FAQs</Typography>
      <Typography variant="body1" className={classes.text1} >Contact Us</Typography>
      </Grid>
      <Grid item xs={4}>
      <Typography variant="h5" className={classes.text1} >LOCATE US</Typography>
      <Typography variant="body1" className={classes.text1} >Plot 59, Akin Ogunmade Davids Close</Typography>
      <Typography variant="body1" className={classes.text1} >Gbagada Phase 2, Lagos.</Typography>
      <Typography variant="body1" className={classes.text1} ><CallIcon/>+2348123913303</Typography>
      <Typography variant="body1" className={classes.text1} ><EmailIcon/>info@instiq.com</Typography>
      </Grid>
      </Grid>
    </div>
  );
}


{/* <Typography>Seen enough? Interested Already? Get Started Today</Typography>; */}