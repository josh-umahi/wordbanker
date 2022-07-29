import React from 'react'
import { Button, Typography } from '@material-ui/core'

import useStyles from './styles';
import { Link } from '@material-ui/core';

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography color='inherit' className={classes.firstText}>Oops!</Typography>
      <Typography color='inherit' className={classes.middleText}>404 - page not found</Typography>
      <Typography color='inherit' className={classes.lastText}>
        The page you are looking for may have been removed or does not exist
      </Typography>
      <Link href="/" underline='none'>
        <Button className={classes.button} variant="contained" size="medium">go to homepage</Button>
      </Link>
    </div>
  )
}

export default PageNotFound