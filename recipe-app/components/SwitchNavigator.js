import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import RecipeScreen from '../screens/RecipeScreen';
import Recipe2 from '../screens/Recipe2';
import { AppStackNavigator } from './AppStackNavigator'
import AddRecipe from '../screens/AddRecipeScreen'
import { AppStackNavigator2} from './AppStackNavoigator2'

export const SwitchNavigator = createSwitchNavigator({
  Recipe2 : {
    screen : AppStackNavigator,
   navigationOptions:{
     headerShown : false
   }
  },

RecipeScreen:{
  screen : AppStackNavigator2,
   navigationOptions:{
      headerShown : true
   }     
},

},
  {
    initialRouteName: 'Recipe2'
  
  }
);
