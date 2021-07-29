import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStyles } from './styles'
import { connect } from 'react-redux';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            REDUX - SHOPPING
          </Typography>
          <IconButton>
            <Link to="/cart" style={{color: "white"}}>
              <ShoppingCartIcon color="inherit" />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.count}>
            {props.totalItems}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (store) => {
  return store.Cart;
}

export default connect(mapStateToProps)(Navbar);