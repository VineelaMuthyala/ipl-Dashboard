import './index.css'

const MatchCard = props => {
  const {recentMatchesDetails} = props
  const {
    result,

    competingTeam,
    competingTeamLogo,

    matchStatus,
  } = recentMatchesDetails

  let textColor = ''

  if (matchStatus === 'Won') {
    textColor = 'green'
  } else {
    textColor = 'red'
  }
  console.log(textColor)
  return (
    <div className="match-card-container">
      <img
        className="card-logo"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p className="card-text card-heading">{competingTeam}</p>
      <p className="card-text">{result}</p>
      <p className={textColor}>{matchStatus}</p>
    </div>
  )
}
export default MatchCard
