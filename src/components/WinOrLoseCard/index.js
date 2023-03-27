// Write your code here.
import './index.css'
import {Component} from 'react'

class ResultCard extends Component {
  render() {
    const {strtwin, score, startLoss} = this.props
    const resetwin = () => {
      console.log(strtwin)
      strtwin()
    }
    const resetLoss = () => {
      startLoss(score)
    }
    const result = score === 12
    return (
      <div className="winOrLooseCard">
        {result && (
          <div className="frag">
            <div>
              <h1 className="won">You Won</h1>
              <p className="best">Best Score</p>
              <p className="winScore">12/12</p>
              <button className="play" type="button" onClick={resetwin}>
                Play Again
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="win or lose"
              className="resultImage"
            />
          </div>
        )}
        {!result && (
          <div className="frag">
            <div>
              <h1 className="won">You Lose</h1>
              <p className="best">Score</p>
              <p className="winScore">{score}/12</p>
              <button className="play" type="button" onClick={resetLoss}>
                Play Again
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="wongame"
              className="resultImage"
            />
          </div>
        )}
      </div>
    )
  }
}
export default ResultCard
