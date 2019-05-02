import React from 'react';
import loader from '../../assets/loading.gif'
import './styles.css';

const Results = ({isLoading, data}) => {
  if(isLoading) {
    return <img src={loader} alt="loading..." />
  } else if(data !== null) {
    return (
      <div>
        <h1>WITH DATA</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>NO DATA</h1>
      </div>
    )
  }

}

export default Results;