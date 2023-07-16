import React from 'react';

import classes from './LoadingIndicator.module.css';

const LoadingIndicator = () => (
  <div className={classes.lds_ring}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default LoadingIndicator;