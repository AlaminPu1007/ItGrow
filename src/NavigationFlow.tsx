import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SafeAreaProvider} from 'react-native-safe-area-context';

//for tab navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// bring tab navigation screen
import TradingScreen from './Screen/TradingScreen';
import QuotesScreen from './Screen/QuotesScreen';

// type for auth stack
export type RootStackParamList = {
  Trading: undefined;
  Quotes: undefined;
};

// const AuthStack = createNativeStackNavigator<RootStackParamList>();

// Authentication stack navigation define here
// const StackAuthNavigation = () => {
//   return (
//     <AuthStack.Navigator screenOptions={{headerShown: false}}>
//       <AuthStack.Screen name="SignIn" component={SignInScreen} />
//       <AuthStack.Screen name="SignUp" component={SignUpScreen} />
//       <AuthStack.Screen
//         name="forgetPassword"
//         component={ForgetPasswordScreen}
//       />
//     </AuthStack.Navigator>
//   );
// };

//define tab navigation
const Tab = createBottomTabNavigator<RootStackParamList>();

//dashboard navigation flow
const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {display: 'none'},

        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 15,
        },
      }}>
      <Tab.Screen name="Trading" component={TradingScreen} />
      <Tab.Screen name="Quotes" component={QuotesScreen} />
    </Tab.Navigator>
  );
};

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeTabNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
