import React, { Component } from 'react';

import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';
import { Link } from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get('/posts')
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: 'Tan, Le',
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => console.log(error));
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => (
        <Link key={post.id} to={`/${post.id}`}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        </Link>
      ));
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
