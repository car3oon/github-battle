import React from 'react';

var ConfirmBattle = (props) => {
  return (
    props.isLoading ?
    <p>LOADING!</p> :
    <p>Battle confirm!</p>
  );
}

export default ConfirmBattle;
