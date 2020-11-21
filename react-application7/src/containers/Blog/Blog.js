import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";
//import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../hoc/asyncComponent";

import { Route, NavLink, Switch, Redirect } from "react-router-dom";

const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: false,
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to={{ pathname: "/new-post" }}>New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={<p>Hello Element</p>}></Route> */}
        <Switch>
          {/* below for authentication */}
          {/* {this.state.auth ? (
            <Route path="/new-post" component={NewPost}></Route>
          ) : null} */}
          <Route path="/new-post" component={AsyncNewPost}></Route>
          {/* <Route path="/" component={Posts}></Route> */}
          <Route path="/" component={Posts}></Route>
          {/* <Redirect from="/" to="/posts"></Redirect> */}
          {/* <Route render={() => <h1>Not Found</h1>}></Route> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
