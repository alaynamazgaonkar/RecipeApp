import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Recipe2  from '../screens/Recipe2';
import RecipeDisplay from '../screens/RecipeDisplay';
import AddScreen from '../screens/AddScreen';


export const AppStackNavigator = createStackNavigator({
  IngredientsList : {
    screen : Recipe2,
   navigationOptions:{
     headerShown : false
   }
  },

Recipe:{
  screen : RecipeDisplay,
   navigationOptions:{
      headerShown : true
   }     
},

},
  {
    initialRouteName: 'IngredientsList'
  
  }
);