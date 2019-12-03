import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Campings from '../screens/Campings';
import Settings from '../screens/Settings';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

export default createStackNavigator({
  Campings: Campings,
  Settings: Settings,
  HomeScreen: HomeScreen,
  LinksScreen:  LinksScreen,
});