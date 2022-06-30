import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {
    showClock: false,
  }

  updateButtonName = () => {
    this.setState(preState => ({
      showClock: !preState.showClock,
    }))
  }

  render() {
    const {showClock} = this.state
    console.log(showClock)
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.updateButtonName}
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
