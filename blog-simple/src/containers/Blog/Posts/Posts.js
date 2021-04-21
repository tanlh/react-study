import React, { Component } from 'react';

import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';
import { Route } from 'react-router';
import FullPost from '../FullPost/FullPost';

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
    // this.props.history.push({ pathname: '/' + id });
    this.props.history.push(`${this.props.match.path}/${id}`);
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => (
        // <Link key={post.id} to={`${this.props.match.path}/${post.id}`}>
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
        /* </Link> */
      ));
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={`${this.props.match.path}/:id`} component={FullPost} />
      </div>
    );
  }
}

export default Posts;
