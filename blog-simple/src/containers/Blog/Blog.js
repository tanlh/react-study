import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: '#a34608',
                    textDecoration: 'underline',
                  }}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}
                >
                  NEW POST
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/new-post" component={NewPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
