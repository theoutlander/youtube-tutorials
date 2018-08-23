import React, { Component } from "react"
import * as ReactDOM from "react-dom"

class Mouse extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>{this.props.render(this.state)}</div>
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Mouse
          render={() => {
            return "ASDasdsdsds"
          }}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
