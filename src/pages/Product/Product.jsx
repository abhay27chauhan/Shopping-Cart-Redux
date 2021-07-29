import React, { useEffect, useState } from 'react'
import { Container, Typography, CircularProgress, Button } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { connect } from 'react-redux';

import { useStyles } from './styles';
import { CART_ACTIONS } from '../../redux/CartReducer/CartReducer';

function Product(props){
    const classes = useStyles();
    const [currentProduct,  setCurrentProduct] = useState(null);
    const pid = props.match.params.id;
    const productArr = props.products;

    useEffect(() => {
        const product = productArr.find(obj => obj.id == pid);
        setCurrentProduct(product);
    }, [pid])

    return (
        <Container className={classes.root} component="main" maxWidth="xl">
            {
                currentProduct === null ? <CircularProgress />
                :
                (
                    <div className={classes.productContainer}>
                        <div className={classes.imgContainer}>
                            <img className={classes.img} src={currentProduct.image} alt={currentProduct.title}/>
                        </div>
                        <div className={classes.detailContainer}>
                            <Typography gutterBottom variant="h3" component="h2">
                                {currentProduct.title}
                            </Typography>
                            <Typography variant="body2" component="p" color="textSecondary">
                                M.R.P. <span className={classes.price}>&nbsp;&nbsp;{currentProduct.price}</span>
                            </Typography>
                            <div className={classes.pd}>
                                <Typography variant="h5" component="h6">
                                    Description
                                </Typography> 
                                <div className={classes.space}/>
                                <Typography variant="body2" component="p">
                                    {currentProduct.description}
                                </Typography> 
                            </div>
                            <Button startIcon={<ShoppingCartOutlinedIcon />} variant="contained" className={classes.btn} onClick={() => props.addToCart(currentProduct)} >
                                Add To Cart
                            </Button>
                        </div>
                    </div>
                )
            }
        </Container>
    )
}

const mapStateToProps = (store) => {
    return store.Shop;
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productObj) => {
            return dispatch({type: CART_ACTIONS.ADD_TO_CART, payload: productObj})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
