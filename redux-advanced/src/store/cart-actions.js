import { uiActions } from 'store/ui-slice';
import { cartActions } from 'store/cart-slice';
import axios from 'axios';

export const fetchCartData = () => {
  return (dispatch) => {
    axios
      .get('cart.json')
      .then((response) => {
        dispatch(cartActions.replaceCart(response.data));
      })
      .catch((error) =>
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Failed!',
            message: 'Fetch cart data failed!',
          })
        )
      );
  };
};

export const sendCartData = (cart) => {
  return (dispatch) => {
    axios
      .put('cart.json', {
        items: cart.items,
        totalQuantity: cart.totalQuantity,
      })
      .then((response) => {
        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success',
            message: 'Send cart data successfully!',
          })
        );
      })
      .catch((error) =>
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Failed!',
            message: 'Send cart data failed!',
          })
        )
      );
  };
};
