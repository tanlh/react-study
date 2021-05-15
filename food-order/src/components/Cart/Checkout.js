import styles from './Checkout.module.css';
import useInput from 'hooks/useInput';
import { isNotEmpty, isPostal } from 'utils/validation';

const Checkout = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameInputInvalid,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: street,
    isValid: streetIsValid,
    hasError: streetInputInvalid,
    valueChangeHandler: streetInputChangeHandler,
    inputBlurHandler: streetInputBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: postal,
    isValid: postalIsValid,
    hasError: postalInputInvalid,
    valueChangeHandler: postalInputChangeHandler,
    inputBlurHandler: poastalInputBlurHandler,
  } = useInput(isPostal);

  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityInputInvalid,
    valueChangeHandler: cityInputChangeHandler,
    inputBlurHandler: cityInputBlurHandler,
  } = useInput(isNotEmpty);

  const isFormValid =
    nameIsValid && streetIsValid && postalIsValid && cityIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }

    props.onConfirm({
      name,
      street,
      postal,
      city,
    });
  };

  const nameControlClasses = `${styles.control} ${
    nameInputInvalid ? styles.invalid : ''
  }`;
  const streetControlClasses = `${styles.control} ${
    streetInputInvalid ? styles.invalid : ''
  }`;
  const postalControlClasses = `${styles.control} ${
    postalInputInvalid ? styles.invalid : ''
  }`;
  const cityControlClasses = `${styles.control} ${
    cityInputInvalid ? styles.invalid : ''
  }`;

  return (
    <form onSubmit={confirmHandler} className={styles.form}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputInvalid && (
          <span className={styles['error-text']}>
            Please input a valid name!
          </span>
        )}
      </div>

      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={streetInputChangeHandler}
          onBlur={streetInputBlurHandler}
        />
        {streetInputInvalid && (
          <span className={styles['error-text']}>
            Please input a valid street!
          </span>
        )}
      </div>

      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postal}
          onChange={postalInputChangeHandler}
          onBlur={poastalInputBlurHandler}
        />
        {postalInputInvalid && (
          <span className={styles['error-text']}>
            Please input a valid postal code (5 characters long)!
          </span>
        )}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={cityInputChangeHandler}
          onBlur={cityInputBlurHandler}
        />
        {cityInputInvalid && (
          <span className={styles['error-text']}>
            Please input a valid city
          </span>
        )}
      </div>

      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
