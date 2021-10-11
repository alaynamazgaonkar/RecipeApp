import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { AppStackNavigator } from './AppStackNavigator'
import ListScreen  from '../screens/ListScreen';
import RecipeScreen from '../screens/RecipeScreen';
import RecipeDisplay from '../screens/RecipeDisplay';

export const AppStackNavigator2 = createStackNavigator({
RecipeScreen: {
  screen: RecipeScreen ,
//    screen: ListScreen,
 // },
//  EditIngredients: {
//    screen: EditScreen,
   navigationOptions:{
     headerShown : false
   }
  },
    Recipe: {
    screen: RecipeDisplay,
  },
},

{
    initialRouteName: 'RecipeScreen'
  
  }
);
