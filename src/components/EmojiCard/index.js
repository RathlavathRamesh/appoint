// Write your code here.
import './index.css'
import {Component} from 'react'

class Imojis extends Component {
  render() {
    const {item, gameResult} = this.props
    const {emojiUrl, emojiName, id} = item
    const GameResult = () => {
      gameResult(id)
    }
    return (
      <li className="card">
        <button className="imgCard" type="button" onClick={GameResult}>
          <img src={emojiUrl} alt={emojiName} className="emoji" />
        </button>
      </li>
    )
  }
}
export default Imojis
