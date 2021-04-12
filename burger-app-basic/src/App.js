import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import BuilderBuider from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BuilderBuider />
        </Layout>
      </div>
    );
  }
}

export default App;
