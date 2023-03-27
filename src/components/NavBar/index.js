// Write your code here.
import {Component} from 'react'
import './index.css'

class Navbar extends Component {
  render() {
    const {iscard, score, top} = this.props
    return (
      <nav className="navContainer">
        <div className="fpart">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            className="navImage"
            alt="emoji logo"
          />
          <h1 className="gameheading">Emoji Game</h1>
        </div>
        {!iscard ? (
          <div className="scores">
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {top}</p>
          </div>
        ) : (
          ''
        )}
      </nav>
    )
  }
}
export default Navbar
