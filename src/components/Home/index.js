// Write your code here

import {Component} from 'react'

import {TailSpin} from 'react-loader-spinner'


import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplTeamsData: [], isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const newData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({iplTeamsData: newData})
    this.setState({isLoading: false})
  }

  render() {
    const {iplTeamsData, isLoading} = this.state
    const renderPage = isLoading ? (
      <div testid="loader">
        <TailSpin type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="page">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="logo-heading">IPL Dashboard</h1>
        </div>

        <ul className="team-card">
          {iplTeamsData.map(eachTeam => (
            <TeamCard key={eachTeam.id} eachTeam={eachTeam} />
          ))}
        </ul>
      </div>
    )
    return <div className="app">{renderPage}</div>
  }
}

export default Home
