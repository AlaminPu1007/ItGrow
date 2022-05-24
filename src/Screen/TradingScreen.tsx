import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {StorePostData} from '../redux/dashboardRedux/DashboardActionMethod';

const TradingScreen = () => {
  // api get called at initial screen open
  useEffect(() => {
    // StorePostData();
  }, []);
  return (
    <View>
      <Text>TradingScreen</Text>
    </View>
  );
};

export default TradingScreen;

const styles = StyleSheet.create({});
