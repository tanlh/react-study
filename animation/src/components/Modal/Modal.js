import './Modal.css';
import CSSTransition from 'react-transition-group/CSSTransition';

const animationTimeOut = {
  enter: 400,
  exit: 1000,
};

const Modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTimeOut}
      mountOnEnter
      unmountOnExit
      //   classNames="fade-slide"
      classNames={{
        enter: '',
        enterActive: 'modal-open',
        exit: '',
        exitActive: 'modal-close',
      }}
    >
      <div className="modal">
        <h1>A Modal</h1>
        <button className="button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
    // <Transition
    //   in={props.show}
    //   timeout={animationTimeOut}
    //   mountOnEnter
    //   unmountOnExit
    // >
    //   {(state) => {
    //     const cssClasses = `modal ${
    //       state === 'entering'
    //         ? 'modal-open'
    //         : state === 'exiting'
    //         ? 'modal-close'
    //         : ''
    //     }`;

    //     return (
    //       <div className={cssClasses}>
    //         <h1>A Modal</h1>
    //         <button className="button" onClick={props.closed}>
    //           Dismiss
    //         </button>
    //       </div>
    //     );
    //   }}
    // </Transition>
  );
};

export default Modal;
