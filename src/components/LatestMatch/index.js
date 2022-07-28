// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {latestMatchDetails} = details
  const {
    date,
    venue,
    umpires,
    competingTeam,
    competingTeamLogo,
    result,
    manOfTheMatch,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <li className="latest-match">
      <div className="section1">
        <p className="team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <div className="section2">
        <img
          src={competingTeamLogo}
          alt="latest match {competingTeam}"
          className="logo-img"
        />
      </div>
      <div className="section3">
        <p className="innings">First Innings</p>
        <p className="first">{firstInnings}</p>
        <p className="innings">Second Innings</p>
        <p className="second">{secondInnings}</p>
        <p className="innings">Man Of The Match</p>
        <p className="man-of-match">{manOfTheMatch}</p>
        <p className="innings">Umpires</p>
        <p className="umpires">{umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
