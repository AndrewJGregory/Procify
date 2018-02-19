import { connect } from "react-redux";
import MainPage from "./main_page";
import { toggleSuccessMsg } from "../actions/ui_actions";

const mapStateToProps = state => {
  return {
    isSuccessMsgDisplayed: state.ui.isSuccessMsgDisplayed,
    successMsgClass: state.ui.successMsgClass
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSuccessMsg: () => dispatch(toggleSuccessMsg())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
