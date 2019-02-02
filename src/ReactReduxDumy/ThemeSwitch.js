import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
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

  // dispatch action 去改变颜色
  handleSwitchColor(color) {
    const { Store } = this.context
    Store.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: color
    })
  }

  render() {
    return (
      <div>
        <button
          style={{ color: this.state.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
        <button
          style={{ color: this.state.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
      </div>
    )
  }
}

export default ThemeSwitch