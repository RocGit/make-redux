import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Store from './Store'

class Header extends Component {
  static contextTypes = {
    Store: PropTypes.object
  }

  constructor() {
    super()
    this.state = { themeColor: '' }
  }

  componentWillMount() {
    const { Store } = this.context
    this._updateThemeColor()
    Store.subscribe(() => this._updateThemeColor())
  }

  _updateThemeColor() {
    const { Store } = this.context
    const state = Store.getState()
    this.setState({ themeColor: state.themeColor })
  }

  render() {
    return (
      <h1 style={{ color: this.state.themeColor }}>React Redux</h1>
    )
  }
}

export default Header