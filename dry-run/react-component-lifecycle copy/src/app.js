import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter'

import CSS from './app.css'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mount: true,
      ignore: null,
      seed: 0,
      showBroken: false
    }

    this.mountCounter = () => this.setState({mount: true})
    this.unmountCounter = () => this.setState({mount: false})

    this.ignoreProp = () => this.setState({ignore: Math.random()})

    this.randomizeNumber = () => this.setState({seed: Number.parseInt(Math.random() * 100)})
    this.toggleError = () => this.setState({showBroken: !this.state.showBroken})
  }

  render () {
    return <div>
      <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
      <button onClick={this.unmountCounter} disabled={!this.state.mount}>UnMount Counter</button>
      <button onClick={this.ignoreProp}>Update Ignored Prop</button>
      <button onClick={this.randomizeNumber}>Update Seed</button>
      <button onClick={this.toggleError}>Toggle Error</button>
      {this.state.mount ?
        <Counter
          ignore={this.state.ignore}
          seed={this.state.seed}
          showBroken={this.state.showBroken}
        /> :
        null}
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))