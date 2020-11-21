import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreator from "../../store/actions/index";

class Counter extends Component {
  state = {
    counter: 0,
  };

  // counterChangedHandler = (action, value) => {
  //   switch (action) {
  //     case "inc":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter + 1 };
  //       });
  //       break;
  //     case "dec":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter - 1 };
  //       });
  //       break;
  //     case "add":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter + value };
  //       });
  //       break;
  //     case "sub":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter - value };
  //       });
  //       break;
  //   }
  // };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctrValue} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr></hr>
        <button onClick={() => this.props.onStoreResult(this.props.ctrValue)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map((strResult) => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps---", state);
  return {
    ctrValue: state.ctrReducer.counter,
    storedResults: state.resReducer.results,
  };
};

const mapDipatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionCreator.increment()),
    onDecrementCounter: () => dispatch(actionCreator.decrement()),
    onAddCounter: () => dispatch(actionCreator.add(5)),
    onSubtractCounter: () => dispatch(actionCreator.subtract(5)),
    onStoreResult: (result) => dispatch(actionCreator.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreator.deleteResult(id)),
  };
};
export default connect(mapStateToProps, mapDipatchToProps)(Counter);
