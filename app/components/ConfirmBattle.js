import React from 'react';

var puke = (obj) => {
  return <pre><code>{JSON.stringify(obj, null, '')}</code></pre>;
}

var ConfirmBattle = (props) => {
  return (
    props.isLoading
    ? <p>LOADING!</p>
    : <div className="col-sm-12"><p>CONFIRM BATTLE:</p>{puke(props)}</div>
  );
}

export default ConfirmBattle;
