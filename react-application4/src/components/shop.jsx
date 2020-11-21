import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

class Shop extends Component {
  state = {
    photos: [],
  };

  tableStyle = {
    align: "left",
  };

  componentDidMount() {
    console.log("component did mount called");
    this.fetchData();
  }

  fetchData() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ photos: data });
      })
      .catch(console.log);
  }

  render() {
    {
      return (
        <div className="container">
          <table className="table table-bordered" style={this.tableStyle}>
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Title</th>
                <th scope="col">Url</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {this.state.photos.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{data.id}</th>
                  <td align="left">{data.title}</td>
                  <td align="left">{data.url}</td>
                  <td align="left">
                    <Link to={`/shop/${data.thumbnailUrl}`}>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Shop;
