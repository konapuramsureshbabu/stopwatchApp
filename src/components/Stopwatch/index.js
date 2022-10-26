import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, seconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  getTimer = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  startTimer = () => {
    this.timerId = setInterval(this.getTimer, 1000)
    this.setState({isTimerRunning: true})
  }

  resetTimer = () => {
    this.setState({isTimerRunning: false, seconds: 0})
    clearInterval(this.timerId)
  }

  stopTimer = () => {
    this.setState({isTimerRunning: false})
    clearInterval(this.timerId)
  }

  renderOfSeconds = () => {
    const {seconds} = this.state
    const requiredSeconds = Math.floor(seconds % 60)

    if (requiredSeconds < 10) {
      return `0${requiredSeconds}`
    }
    return requiredSeconds
  }

  renderOfMinutes = () => {
    const {seconds} = this.state
    const requiredMinutes = Math.floor(seconds / 60)

    if (requiredMinutes < 10) {
      return `0${requiredMinutes}`
    }
    return requiredMinutes
  }

  render() {
    const {isTimerRunning} = this.state
    const displayTime = `${this.renderOfMinutes()}:${this.renderOfSeconds()}`
    return (
      <div className="main-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-image-container">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{displayTime}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="start button"
                onClick={this.startTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="stop button"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset button"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
