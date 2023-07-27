import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesList()
  }

  getTeamMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const teamBanner = data.team_banner_url
    console.log(teamBanner)

    const recentMatchesResponse = data.recent_matches
    const updatedRecentMatches = recentMatchesResponse.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))
    const latestMatchDetailsResponse = data.latest_match_details
    const updatedLatestMatchDetails = {
      umpires: latestMatchDetailsResponse.umpires,
      result: latestMatchDetailsResponse.result,
      manOfTheMatch: latestMatchDetailsResponse.man_of_the_match,
      id: latestMatchDetailsResponse.id,
      date: latestMatchDetailsResponse.date,
      venue: latestMatchDetailsResponse.venue,
      competingTeam: latestMatchDetailsResponse.competing_team,
      competingTeamLogo: latestMatchDetailsResponse.competing_team_logo,
      firstInnings: latestMatchDetailsResponse.first_innings,
      secondInnings: latestMatchDetailsResponse.second_innings,
      matchStatus: latestMatchDetailsResponse.match_status,
    }

    this.setState({
      teamBanner,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
      isLoading: false,
    })
  }

  renderTeamMatchesDetails = () => {
    const {teamBanner, latestMatchDetails, recentMatches} = this.state

    return (
      <div className="team-matches-container">
        <img className="banner-image" alt="team banner" src={teamBanner} />
        <p className="heading">Latest Matches</p>
        <ul>
          <li className="list-latest-match">
            <LatestMatch
              latestMatchDetails={latestMatchDetails}
              teamBanner={teamBanner}
            />
          </li>
          <li className="list-match-card">
            {recentMatches.map(eachItem => (
              <MatchCard key={eachItem.id} recentMatchesDetails={eachItem} />
            ))}
          </li>
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div className="bg-team-matches-container" data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatchesDetails()
        )}
      </div>
    )
  }
}
export default TeamMatches
