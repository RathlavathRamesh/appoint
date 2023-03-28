/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import Navbar from '../NavBar'
import Imojis from '../EmojiCard'
import ResultCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {wlcard: false, score: 0, topscore: 0, idList: []}

  GameResult = id => {
    const {idList} = this.state
    const isIdNotPresent = idList.every(eachId => id !== eachId)
    console.log(isIdNotPresent)
    if (isIdNotPresent) {
      const {score} = this.state
      const num = score + 1
      console.log(num)
      if (num === 12) {
        this.setState(prev => ({score: num, wlcard: !prev.wlcard}))
      } else {
        this.setState({
          idList: [...idList, id],
          score: num,
        })
      }
    } else if (idList.length === 12) {
      this.setState(prev => ({wlcard: !prev.wlcard}))
    } else {
      this.setState(prev => ({wlcard: !prev.wlcard}))
    }
  }

  startLoss = toper => {
    this.setState(prev => {
      const top = prev.topscore < toper ? toper : prev.topscore

      return {wlcard: false, score: 0, topscore: top, idList: []}
    })
  }

  startagain = () => {
    this.setState({wlcard: false, score: 0, topscore: 12, idList: []})
  }

  render() {
    const {wlcard, score, topscore, idList} = this.state
    const {emojisList} = this.props
    return (
      <div className="gameContainer">
        <Navbar iscard={wlcard} score={score} top={topscore} />
        {!wlcard ? (
          <ul className="imojis">
            {emojisList.map(eachemoji => (
              <Imojis
                item={eachemoji}
                key={eachemoji.id}
                gameResult={this.GameResult}
              />
            ))}
          </ul>
        ) : (
          <div className="resultCard">
            <ResultCard
              strtwin={this.startagain}
              startLoss={this.startLoss}
              List={idList}
              score={score}
              top={topscore}
            />
          </div>
        )}
      </div>
    )
  }
}
export default EmojiGame
