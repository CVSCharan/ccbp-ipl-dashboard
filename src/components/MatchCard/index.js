// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  console.log(details)
  const {competingTeamLogo, competingTeam, result, matchStatus} = details
  const matchStatus1 = matchStatus.toLowerCase()
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt="Example response"
        className="logo-img"
      />
      <h1 className="heading1">{competingTeam}</h1>
      <p className="para-result">{result}</p>
      <p className={matchStatus1}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
