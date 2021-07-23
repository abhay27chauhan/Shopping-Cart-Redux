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

export default function ProductCard(props) {
  const classes = useStyles();
  const productPageUrl = `/product/{props.id}` 

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
          <Typography className={classes.price} variant="h5" component="h2">
            {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary">
            <Link to={productPageUrl}>
                DETAILS
            </Link>
        </Button>
        <Button size="medium" color="primary">
            <Link to="/cart" >
                ADD TO CART
            </Link>
        </Button>
      </CardActions>
    </Card>
  );
}