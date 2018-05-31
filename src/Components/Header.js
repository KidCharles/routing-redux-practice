import React from 'react';
import {Link} from 'react-router-dom'


export default (props) => {
 console.log(props)
  return (
    <div style={{background:'lightgrey', display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
    <Link to='/partTwo'><button>part two -></button></Link>
      <h1 style={{margin:'0px'}}>Redux Survey</h1>
      <Link to='/'> <button> HOME </button></Link>
    </div>
  )
};

