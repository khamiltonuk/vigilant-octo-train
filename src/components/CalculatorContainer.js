import { connect } from "react-redux";
import Calculator from "./Calculator";
import {
  clearInput,
  clearAll,
  calculate,
  enterNumber,
  removeValue,
  keypadPress
} from "../actions";
import "./Calculator.css";

export const CalculatorContainer = connect(
  function mapStateToProps(state) {
    return {
      displayValue: state.displayValue,
      values: state.values
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      removeValue: id => dispatch(removeValue(id)),
      clearAll: () => dispatch(clearAll()),
      clearInput: () => dispatch(clearInput()),
      calculate: operation => dispatch(calculate(operation)),
      enterNumber: value => dispatch(enterNumber(value)),
      keypadPress: value => dispatch(keypadPress(value))
    };
  }
)(Calculator);
