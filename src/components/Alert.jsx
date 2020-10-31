import React from 'react';

const Alert = props => {
  return (<p className="alert-field" style={{color: 'white', backgroundColor: 'red'}}>
    {props.error}
  </p>)
}

export default Alert;
