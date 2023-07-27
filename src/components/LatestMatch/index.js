import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  console.log(date)
  return (
    <div className="competing-team-container">
      <div className="competing-team-info-container">
        <p className="latest-matches-text heading-latest-matches">
          {competingTeam}
        </p>
        <p className="latest-matches-text">{date}</p>
        <p className="latest-matches-text">{venue}</p>
        <p className="latest-matches-text">{result}</p>
      </div>
      <img
        className="competing-team-image"
        alt={`latest match ${competingTeam}`}
        src={competingTeamLogo}
      />
      <div className="competing-team-info-container">
        <p className="latest-matches-text">First Innings</p>
        <p className="latest-matches-text">{firstInnings}</p>
        <p className="latest-matches-text">Second Innings</p>
        <p className="latest-matches-text">{secondInnings}</p>
        <p className="latest-matches-text">Man Of The Match</p>
        <p className="latest-matches-text">{manOfTheMatch}</p>
        <p className="latest-matches-text">Umpire</p>
        <p className="latest-matches-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
