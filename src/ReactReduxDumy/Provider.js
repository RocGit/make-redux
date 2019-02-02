
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Provider extends Component {
  static propTypes = {
    Store: PropTypes.object,
    children: PropTypes.any
  }

  static childContextTypes = {
    Store: PropTypes.object
  }

  getChildContext() {
    return {
      Store: this.props.Store
    }
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

export default Provider