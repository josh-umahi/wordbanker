import React, { useEffect, useState } from 'react'
import { Container, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Navbar from './components/Navbar/Navbar';
import ModalForm from './components/ModalForm/ModalForm';

const App = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <Navbar />
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
            </Grid>
            <Grid item xs={12} sm={4}>
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <ModalForm typeOfForm="CREATE" />
      <ModalForm typeOfForm="EDIT" />
    </div>
  )
}

export default App