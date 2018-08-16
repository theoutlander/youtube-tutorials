import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './counter'
import CSS from './app.css'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mount: true,
      showBroken: false
    }

    this.mountCounter = () => this.setState({mount: true})
    this.unmountCounter = () => this.setState({mount: false})

    this.updateProp = () => this.setState({ignore: Math.random()})

    this.toggleBrokenComponent = () => this.setState({showBroken: !this.state.showBroken})
    this.randomizeNumber = () => this.setState({seed: Number.parseInt(Math.random() * 100)})
  }

  render () {
    return <div>
      <button onClick={this.mountCounter} disabled={this.state.mount}> Mount Counter</button>
      <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
      <button onClick={this.updateProp}>Update Ignored Prop</button>
      <button onClick={this.randomizeNumber}>Update Seed</button>
      <button onClick={this.toggleBrokenComponent}>Toggle Broken Component</button>
      {this.state.mount ?
        <Counter
          ignore={this.state.ignore}
          showBroken={this.state.showBroken}
          seed={this.state.seed}/> :
        null}
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('root')
)