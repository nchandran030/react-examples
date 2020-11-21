import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 3);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Max",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Error In Api call</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Link to={"/" + post.id} key={post.id}>
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              {...this.props}
              clicked={() => this.postSelectedHandler(post.id)}
            ></Post>
          </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path="/:id" exact component={FullPost}></Route>
      </div>
    );
  }
}

export default withRouter(Posts);
