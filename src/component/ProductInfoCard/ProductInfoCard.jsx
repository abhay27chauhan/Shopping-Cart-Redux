import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { useStyles } from './styles';
import { connect } from 'react-redux';
import { CART_ACTIONS } from '../../redux/CartReducer/CartReducer';

function ProductInfoCard({removeFromCart, addToCart, clearFromCart, ...props}) {
  const classes = useStyles();
  const [qty, setQty] = useState(1);

  console.log("cart product ", props)

  const handleQty = (e) => {
    const val = e.target.value;
    if(val < 1){
      return;
    }

    if(val < qty){
      removeFromCart(props);
    }else if(val > qty){
      addToCart(props);
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
            <Button onClick={() => clearFromCart(props) } endIcon={<DeleteIcon />} variant="contained" className={classes.btn} >
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

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productObj) => {
      return dispatch({type: CART_ACTIONS.ADD_TO_CART, payload: productObj});
    },

    removeFromCart: (productObj) => {
      return dispatch({type: CART_ACTIONS.REMOVE_FROM_CART, payload: productObj});
    },

    clearFromCart: (productObj) => {
      return dispatch({type: CART_ACTIONS.CLEAR_ITEM_FROM_CART, payload: productObj});
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductInfoCard);