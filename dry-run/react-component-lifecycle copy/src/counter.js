import React from 'react'

let ErrorComponent = () => <div>{props.nothing}</div>

export default class Counter extends React.Component {
  constructor (props) {
    console.log('Constructor')
    super(props)

    this.state = {
      counter: 0,
      initialize: true,
      seed: 0
    }

    this.increment = () => this.setState({counter: this.state.counter + 1})
    this.decrement = () => this.setState({counter: this.state.counter - 1})
  }

  static getDerivedStateFromProps (props, state) {
    console.log('Get Derived State From Props', props.seed)

    if(props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      }
    }
    return null
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null
  }

  render () {
    console.log('Render')

    if (this.state.initialize) {
      return 'Initializing...'
    }

    return <div>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
      <div>
        Counter: {this.state.counter}
      </div>
      {this.props.showBroken ? <ErrorComponent/> : null}
    </div>
  }

  componentDidMount () {
    console.log('Component Did Mount')
    setTimeout(() => {
      this.setState({initialize: false})
    }, 500)

    console.log('-------------------')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update')
    console.log('-------------------')
  }

  componentWillUnmount () {
    console.log('Component Will Unmount')
    console.log('-------------------')
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(prevProps.ignore !== this.props.ignore) {
      console.log('Should Component Update - SKIPPING RENDER')
      console.log('-------------------')

      return false
    }

    console.log('Should Component Update - RENDERING', this.state, nextState)
    return true
  }

  componentDidCatch(error, info) {
    console.log('Component Did Catch')
  }
}