import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {GetQuotes} from '../redux/dashboardRedux/DashboardActionMethod';
import io from 'socket.io-client';

const QuotesScreen = () => {
  // api get called at initial screen open
  useEffect(() => {
    //GetQuotes();

    // const client = io('https://qrtm1.ifxdb.com:8443/');
    const socket = io('https://qrtm1.ifxdb.com:8443/', {
      transports: ['websocket', 'polling'],
    });
    // if socket connected successfully. then store it
    socket.on('connect', function () {
      //Subscribe to instrument(s)
      socket.emit('subscribe', ['SILVER']);
      // Unsubscribe from instrument(s)
      socket.emit('unsubscribe', ['SILVER']);
    });

    // Get quotes
    socket.on('quotes', function (data: any) {
      console.log('Tick data', data);
    });

    socket.on('connect_error', err => {
      if (__DEV__) console.log(err, 'from socket');
      // revert to classic upgrade
      socket.io.opts.transports = ['polling', 'websocket'];
    });
  }, []);
  return (
    <View>
      <Text>QuotesScreen</Text>
    </View>
  );
};

export default QuotesScreen;

const styles = StyleSheet.create({});
