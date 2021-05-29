import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { ShopNavigator, AuthNavigator } from '../navigation/ShopNavigator';
import StartupScreen from '../screens/StartupScreen';

const AppNavigator = props => {
  const isAuth = useSelector(state => !!state.auth.token);
  const didTryLogin = useSelector(state => state.auth.didTryLogin);

  return (
    <NavigationContainer>
      {isAuth && <ShopNavigator />}
      {!isAuth && didTryLogin && <AuthNavigator />}
      {!isAuth && !didTryLogin && <StartupScreen />}
    </NavigationContainer>);
};

export default AppNavigator;
