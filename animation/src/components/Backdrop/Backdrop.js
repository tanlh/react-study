import './Backdrop.css';

const Backdrop = (props) => {
  const cssClasses = `backdrop ${
    props.show === 'entering'
      ? 'backdrop-open'
      : props.show === 'exiting'
      ? 'backdrop-close'
      : ''
  }`;

  return <div className={cssClasses}></div>;
};

export default Backdrop;
