import React, { Component } from 'react'
import PropTypes from 'prop-types'

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      Store: PropTypes.object
    }
    constructor() {
      super()
      this.state = { allProps: {} }
    }

    componentWillMount() {
      const { Store } = this.context
      this._updateProps()
      Store.subscribe(() => this._updateProps())
    }

    _updateProps() {
      const { Store } = this.context
      let stateProps = mapStateToProps ? mapStateToProps(Store.getState(), this.props) : {} // 防止 mapStateToProps 没有传入
      let dispatchProps = mapDispatchToProps ? mapDispatchToProps(Store.dispatch, this.props) : {} // 防止 mapDispatchToProps 没有传入
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }

    // TODO: 如何从 store 取数据？

    render() {
      return <WrappedComponent {...this.state.allProps} />
    }
  }

  return Connect
}

export default connect