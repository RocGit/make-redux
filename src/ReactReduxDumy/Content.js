import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
// import Store from './Store'

class Content extends Component {
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
      <div>
        <p style={{ color: this.state.themeColor }}>React Redux Content</p>
        <ThemeSwitch />
      </div>
    )
  }
}

export default Content