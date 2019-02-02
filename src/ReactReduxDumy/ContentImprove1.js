import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import connect from './Connect'

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render() {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容 Content Improvement</p>
        <ThemeSwitch />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

Content = connect(mapStateToProps)(Content)

export default Content