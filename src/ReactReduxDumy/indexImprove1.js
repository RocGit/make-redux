import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Header from './Header'
import Content from './Content'
import Store from './Store'
import HeaderImprove1 from './HeaderImprove1'
import ContentImprove1 from './ContentImprove1'

import Provider from './Provider'

class Index extends Component {
  render() {
    return (
      <Provider Store={Store}>
        <div>
          <Header />
          <Content />
          <hr></hr>
          <HeaderImprove1 />
          <ContentImprove1 />
        </div>
      </Provider>
    )
  }
}

export default Index