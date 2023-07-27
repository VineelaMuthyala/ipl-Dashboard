import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {teamImageUrl, name, id} = teamCardDetails

  return (
    <Link className="link-team-card" to={`/team-matches/${id}`}>
      <div className="team-card-container">
        <img className="team-card-logo" alt={name} src={teamImageUrl} />
        <p className="team-name">{name}</p>
      </div>
    </Link>
  )
}
export default TeamCard
