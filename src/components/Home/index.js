import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {iplTeamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const finalData = data.teams

    const updatedData = finalData.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({iplTeamsList: updatedData, isLoading: false})
  }

  renderHomePage = () => {
    const {iplTeamsList} = this.state
    return (
      <ul className="home-container">
        <li className="logo-container">
          <img
            className="ipl-logo"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </li>
        <li className="dash-board-container">
          {iplTeamsList.map(eachItem => (
            <TeamCard key={eachItem.id} teamCardDetails={eachItem} />
          ))}
        </li>
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container" data-testid="loader">
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderHomePage()
        )}
      </div>
    )
  }
}
export default Home
