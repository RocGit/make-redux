import { connect } from 'react-redux'
import Header from '../Components/HeaderDumb'

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
export default connect(mapStateToProps)(Header)