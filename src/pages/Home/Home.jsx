import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { connect } from "react-redux";

import ProductCard from '../../component/Card/Card';
import { useStyles } from './styles';

function Home(props) {
    const classes = useStyles();

    return (
        <Container className={classes.root} component="main" maxWidth="lg">
            <Grid className={classes.gc} container direction="row" justifyContent="space-evenly" spacing={3}>
                {
                    props.products.map(product => (
                        <Grid key={product.id} item >
                            <ProductCard {...product} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

const mapStateToProps = (store) => {
    return store.Shop
}

export default connect(mapStateToProps)(Home)
