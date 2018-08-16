import React from 'react'

const BrokenComponent = () => <div>{props.nothing}</div>

class Counter extends React.Component {
  constructor (props) {
    console.log('Constructor')
    super(props)

    this.state = {
      counter: 0,
      seed: 0,
      initialize: true
    }

    this.increment = () => this.setState({counter: this.state.counter + 1})
    this.decrement = () => this.setState({counter: this.state.counter - 1})
  }

  static getDerivedStateFromProps (props, state) {
    console.log('Get Derived State From Props', props.seed, state.seed)
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      }
    }

    return null
  }

  shouldComponentUpdate (nextProps, nextState) {
    if(this.props.ignore !== nextProps.ignore) {
      console.log('Should Component Update - NOT RENDERING')
      console.log('----------')
      return false
    }

      console.log('Should Component Update - RENDERING', this.props, nextProps, nextState)
    return true
    // if (nextState.counter !== this.state.counter ||
    //   this.props.seed !== nextProps.seed ||
    //   this.state.error !== nextState.error ||
    //   this.props.showBroken !== nextProps.showBroken) {
    //   console.log('Should Component Update - RENDERING', this.props, nextProps, nextState)
    //   return true
    // }
  }

  componentDidMount () {
    console.log('Component Did Mount')
    if (this.state.initialize) {
      console.log('Setting initialize state to false')
      this.setState({
        initialize: false
      }, () => {
        console.log("Initialize is false")
      })
    }
    console.log('----------')
  }

  render () {
    console.log('Render')

    if (this.state.initialize) {
      return <div>Initializing...</div>
    }

    if (this.props.showBroken && this.state.error) {
      return <div>We encountered the following error: {this.state.info.componentStack}</div>
    }

    return (
      <div>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <div className={'counter'}>Counter: {this.state.counter}</div>
          {this.props.showBroken ? <BrokenComponent/> : null}
        </div>
      </div>
    )
  }

  getSnapshotBeforeUpdate (props, state) {
    console.log('Get Snapshot Before Update')

    return null
  }

  componentDidUpdate () {
    console.log('Component Did Update')
    console.log('----------')
  }

  componentWillUnmount () {
    console.log('Component Will Unmount')
    console.log('----------')
  }

  componentDidCatch (error, info) {
    console.log('Component Did Catch', error, info)
    this.setState({error, info})
  }
}

export default Counter