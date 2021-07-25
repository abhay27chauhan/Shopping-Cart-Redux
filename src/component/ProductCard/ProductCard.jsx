import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import { useStyles } from  './styles'
import { CART_ACTIONS } from '../../redux/CartReducer/CartReducer';
import { connect } from 'react-redux';

function ProductCard({addToCart, ...rest}) {
  const classes = useStyles();
  const productPageUrl = `/product/${rest.id}` 

  console.log("cart ",rest)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={rest.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {rest.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {rest.description}
          </Typography>
          <Typography className={classes.price} variant="h5" component="h2">
            {rest.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary">
            <Link to={productPageUrl}>
                DETAILS
            </Link>
        </Button>
        <Button size="medium" color="primary" onClick={() => addToCart(rest) }>
           ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productObj) => {
      return dispatch({type: CART_ACTIONS.ADD_TO_CART, payload: productObj })
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductCard);