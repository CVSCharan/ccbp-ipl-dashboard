// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-container">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <h2 className="team-name">{name}</h2>
      </li>
    </Link>
  )
}

export default TeamCard
