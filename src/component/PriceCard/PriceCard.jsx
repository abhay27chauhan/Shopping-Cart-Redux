import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

import CustomInput from '../Input/Input';
import { useStyles } from './styles';
import { COUPONS } from '../../data/data';
import { CART_ACTIONS } from '../../redux/CartReducer/CartReducer';

function PriceCard(props) {
  const classes = useStyles();
  const [disCoupon, setDisCoupon] = useState('');

  function getTotalAmt(cartItems, couponToApply){
    function reducer(acc, currentValue){
        return acc + (currentValue.quantity * currentValue.price);
    }
    let totalAmt =  cartItems.reduce(reducer, 0);
    if(Object.keys(couponToApply).length !== 0){
      totalAmt = totalAmt - (totalAmt*couponToApply.discount)/100
    }
    return totalAmt;
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setDisCoupon(value)
  }

  const handleSubmit = () => {
    if(COUPONS[disCoupon] === undefined){
      return;
    }
    props.setCoupon(COUPONS[disCoupon]);
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h6" >
          Cart Summary
        </Typography>
        <Typography className={classes.subtotal} variant="body1" >
          Subtotal ({props.cart.length} items): <span>₹ {getTotalAmt(props.cart, props.coupon)}</span>
        </Typography>
        <div className={classes.coupon}>
          <CustomInput className={classes.input} name="coupon" label="Coupon" type="text" handleChange={handleChange} value={disCoupon} />
          <Button variant="outlined" onClick={handleSubmit}>
            APPLY
          </Button>
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">Proceed To Checkout</Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (store) => {
  return store.Cart
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCoupon: (couponObj) => {
      dispatch({type: CART_ACTIONS.SET_COUPONS, payload: couponObj})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceCard);