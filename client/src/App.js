import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import itemPicture from './images/dungeons-and-dragons.png';
import { getItems } from './actions/items';
// import ItemList from './components/ItemList/ItemList';
import Form from './components/Form/Form';

import useStyles from './styles'

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Items</Typography>
        <img className={classes.image} src={itemPicture} alt="" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            {/* <Grid item xs={12} sm={7}>
              <ItemList />
            </Grid> */}
            <Grid item xs={12} sm={7}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
