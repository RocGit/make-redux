import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './Containers/CommentApp'
import commentsReducer from './Reducers/Comments'
import './index.css'

const store = createStore(commentsReducer)

export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <CommentApp />
      </Provider>
    )
  }
}