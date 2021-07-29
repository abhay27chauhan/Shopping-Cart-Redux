import { Container, Typography } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import PriceCard from '../../component/PriceCard/PriceCard';
import ProductInfoCard from '../../component/ProductInfoCard/ProductInfoCard';

import {useStyles} from './styles'

function Cart(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Container className={classes.container} component="main" maxWidth="lg">
                <div className={classes.cartItems}>
                    <div className={classes.heading}>
                        <Typography variant="h5" component="h5">
                            SHOPPING CART
                        </Typography>
                    </div>
                    <div className={classes.itemList}>
                        <div>
                            {
                                props.cart.map(obj => (
                                    <ProductInfoCard key={obj.id} {...obj} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={classes.amount}>
                    <PriceCard />
                </div>
            </Container>
        </div>
    )
}

const mapStateToProps = (store) => {
    return store.Cart;
}

export default connect(mapStateToProps)(Cart)
