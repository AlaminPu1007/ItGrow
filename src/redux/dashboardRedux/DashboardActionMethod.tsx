/**
 * our all dashboard redux related thing
 * will be goes from here
 */

// bring all dash board action type for access certain task
import {ActionType} from './DashboardActionCreator';
import axios from 'axios';
import store from '../store';
import {io} from 'socket.io-client';
//distract dispatch from store
const {dispatch} = store;

/**
 * Method to store post array of data inside redux
 * need to bd access this value form all screen
 * thats why we implemented it with redux
 */
// type storePostDataProps = {
//   data: Array<object>;
// };

export const StorePostData = async () => {
  if (__DEV__) {
    console.log('check api');
  }
  try {
    // api called and data store inside redux
    const response = await axios.get(
      `https://quotes.instaforex.com/docs/quotesList`,
    );
    if (__DEV__) {
      console.log(response.data);
    }

    // method implemented, now redux is added only
    // store dummy json inside redux
    // dispatch({type: ActionType.STORE_DASHBOARD_DATA, payload: data});
  } catch (StorePostDataError: any) {
    //this clg will be show for dev mood only
    if (__DEV__) {
      console.log(
        StorePostDataError.message,
        'from dashboard store post data error',
      );
    }
  }
};

/**
 * Working on live quotes
 */
export const GetQuotes = async () => {
  try {
    // socket connection
    const socket = io('https://qrtm1.ifxdb.com:8443/');

    // if socket connected successfully. then store it
    socket.on('connect', function () {
      //Subscribe to instrument(s)
      socket.emit('subscribe', ['GOLD']);
      // Unsubscribe from instrument(s)
      socket.emit('unsubscribe', ['GOLD']);
    });

    // Get quotes
    socket.on('quotes', function (data) {
      console.log('Tick data', data);
    });

    // if socket connection error is occur
    socket.on('connect_error', error => {
      if (__DEV__) {
        console.log(error.message, 'socket connect_error from auth action ');
      }
    });
  } catch (GetQuotesError: any) {
    //this log will be show, on dev mode only
    if (__DEV__) {
      console.log(
        GetQuotesError.message,
        'get quotes error from dash board actin method',
      );
    }
  }
};
/**
 * export const authSocketConnect = async ({token = ' '}) => {
  try {
    let query = {};
    query.token = token;
    const socket = io(`${Socket_Api}`, {query});
    // if socket connected successfully. then store it
    socket.on('connect', () => {
      // store socket inside state
      store.dispatch({type: 'STORE_AUTH_SCOKET', payload: socket});
      // console.log('before ');
      // socket.emit('user_open_support_chat_for_text', {date: new Date()});
      // socket.on('user_open_support_chat_for_text', data => {
      //   console.log(data, 'user_open_support_chat_for_text');
      // });
    });
    // if socket connection error is occur
    // either by directly modifying the `auth` attribute
    socket.on('connect_error', error => {
      if (__DEV__) {
        console.log(error.message, 'socket connect_error from auth action ');
      }
    });

    // });
  } catch (authSocketConnectError) {
    if (__DEV__) {
      console.log(
        authSocketConnectError.message,
        'auth action socket connection error',
      );
    }
  }
  //   };
};
 */
