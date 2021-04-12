import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import * as utils from "../../utils/commonUtils";
import axios from "axios";

const withErrorHandler = (WrappedComponent) => {
  class WithErrorHandler extends Component {
    state = { error: null };

    componentWillMount() {
      axios.interceptors.request.use(
        (request) => {
          this.setState({ error: null });
          return request;
        },
        (error) => this.setState({ error: error })
      );
      axios.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <>
          <Modal
            show={this.state.error !== null}
            modalClosed={this.errorConfirmedHandler}
          >
            <h3>Oops, something was wrong!</h3>
            <p>{this.state.error && this.state.error.message}</p>
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  }

  WithErrorHandler.displayName = `WithErrorHandler(${utils.getComponentDisplayName(
    WrappedComponent
  )})`;

  return WithErrorHandler;
};

export default withErrorHandler;
