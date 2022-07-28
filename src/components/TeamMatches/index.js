// Write your code here
import './index.css'

import {Component} from 'react'

import {Loader} from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamMatchesData: [], isLoading: true, renderingId: ''}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchDetailsData = {
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      umpires: data.latest_match_details.umpires,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
    }

    const recentMatchesData = data.recent_matches.map(items => ({
      id: items.id,
      date: items.date,
      venue: items.venue,
      umpires: items.umpires,
      competingTeam: items.competing_team,
      competingTeamLogo: items.competing_team_logo,
      result: items.result,
      manOfTheMatch: items.man_of_the_match,
      matchStatus: items.match_status,
      firstInnings: items.first_innings,
      secondInnings: items.second_innings,
    }))

    const newData = {
      recentMatches: recentMatchesData,
      latestMatchDetails: latestMatchDetailsData,
      teamBannerUrl: data.team_banner_url,
    }

    this.setState({teamMatchesData: newData})
    this.setState({isLoading: false})
    this.setState({renderingId: id})
  }

  render() {
    const {teamMatchesData, isLoading, renderingId} = this.state
    const newRenderingId = renderingId.toLowerCase()
    const {teamBannerUrl} = teamMatchesData
    const {recentMatches} = teamMatchesData
    console.log(recentMatches)
    const renderPage = isLoading ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="container">
        <img src={teamBannerUrl} alt="team banner" className="banner" />
        <p className="para">Latest Matches</p>
        <div className="latest-matches">
          <LatestMatch details={teamMatchesData} />
        </div>
        <ul className="match-card-container">
          {recentMatches.map(items => (
            <MatchCard key={items.id} details={items} />
          ))}
        </ul>
      </div>
    )
    return <div className={newRenderingId}>{renderPage}</div>
  }
}

export default TeamMatches
