import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    //imgUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
    dummyArray: [],
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.dummyArray.length === 0) return <p>No elements in array</p>;
    return (
      <ul>
        {this.state.dummyArray.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  passingArgument = (value) => {
    console.log("argument value---", value);
  };

  render() {
    return (
      <div>
        {/* <img src={this.state.imgUrl} alt="" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.passingArgument({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div>{this.renderTags()}</div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.state.count;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
