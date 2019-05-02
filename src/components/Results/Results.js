import React from 'react';
import loader from '../../assets/loading.gif';
import './styles.css';

const roundTo = require('round-to');

const Results = ({isLoading, data, name}) => {
  if(isLoading) {
    return <img className="loader-gif" src={loader} alt="loading..." />
  } else if(data !== null) {
    {console.log(data)}
    // return <p>data</p>
    {
      return data && data.map((matchData) => {
        return (
          <div className="results-card" key={matchData.matchId}>
            <div className="results-general">
              <p>Match: {matchData.matchId}</p>
              <p>Outcome: {(matchData.matchData[0].stats.win) ? "Victory" : "Defeat"}</p>
            </div>
            <div className="ratio-wrapper">
              <p>K: {matchData.matchData[0].stats.kills}</p>
              <p>D: {matchData.matchData[0].stats.deaths}</p>
              <p>A: {matchData.matchData[0].stats.assists}</p>
              <p>Ratio: {roundTo((matchData.matchData[0].stats.kills + matchData.matchData[0].stats.assists) / matchData.matchData[0].stats.deaths, 2)}</p>
            </div>
            <div className="champ-wrapper">
              <p>Champion Level: {matchData.matchData[0].stats.champLevel}</p>
              <p>Creep Score: {matchData.matchData[0].stats.totalMinionsKilled}</p>
            </div>
          </div>
        )
      })
    }
  } else {
    return (
      <div>
        <h3>Please provide Summoner name</h3>
      </div>
    )
  }

}

export default Results;