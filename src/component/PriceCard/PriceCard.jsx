import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: "3px"
  },
  subtotal:{
    fontSize: 14,
    '& > span': {
      fontWeight: "bold"
    }
  },
  pos: {
    marginBottom: 12,
  },
});

export default function PriceCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h6" >
          Cart Summary
        </Typography>
        <Typography className={classes.subtotal} variant="body1" >
          Subtotal (3 items): <span>21345</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}