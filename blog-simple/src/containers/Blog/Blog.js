import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';

const NewPost = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {
  state = {
    auth: true,
  };

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
                  POSTS
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
          {this.state.auth && (
            <Route
              path="/new-post"
              render={(props) => (
                <Suspense fallback={<h3>Loading...</h3>}>
                  <NewPost {...props} />
                </Suspense>
              )}
            />
          )}
          <Route path="/posts" component={Posts} />
          {/* <Route path="/" component={Posts} /> */}
          {/* <Redirect from="/" to="/posts" /> */}
          <Route render={() => <h1>Not found!</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
