import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Header from './Containers/HeaderSmart'
import Content from './Containers/ContentSmart'

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const Store = createStore(themeReducer)

class Index extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Header />
          <Content />
          <hr></hr>
        </div>
      </Provider>
    )
  }
}

export default Index