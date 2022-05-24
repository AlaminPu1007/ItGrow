import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {GetQuotes} from '../redux/dashboardRedux/DashboardActionMethod';

const QuotesScreen = () => {
  // api get called at initial screen open
  useEffect(() => {
    // GetQuotes();
  }, []);
  return (
    <View>
      <Text>QuotesScreen</Text>
    </View>
  );
};

export default QuotesScreen;

const styles = StyleSheet.create({});
