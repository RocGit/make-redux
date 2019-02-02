import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Content from './Content'
import Store from './Store'
import HeaderImprove1 from './HeaderImprove1'
import ContentImprove1 from './ContentImprove1'

class Index extends Component {
  static childContextTypes = {
    Store: PropTypes.object
  }

  getChildContext() {
    return { Store }
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
        <hr></hr>
        <HeaderImprove1 />
        <ContentImprove1 />
      </div>
    )
  }
}

export default Index