import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { useStyles } from './styles';

function ProductInfoCard(props) {
  const classes = useStyles();
  const [qty, setQty] = useState(1);

  const handleQty = (e) => {
    const val = e.target.value;
    if(val < 1){
      return;
    } 

    setQty(val);
  }

  useEffect(() => {
    setQty(props.quantity)
  }, [])

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={props.image}
        title={props.title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.title}
          </Typography>
          <div className={classes.quantity}>
            <Typography variant="subtitle1" color="textSecondary">
              Qty
            </Typography>
            <input type="number" value={qty} onChange={handleQty}/>
          </div>
          <Typography variant="subtitle2" >
            {props.description}
          </Typography>
          <div className={classes.btnContainer}>
            <Button endIcon={<DeleteIcon />} variant="contained" className={classes.btn} >
              Delete
            </Button>
            <Typography variant="h6" component="h6">
              {props.price}
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export default ProductInfoCard