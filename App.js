import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import CocktailList from './component/cocktailList/CocktailList';
import CocktailRecipe from './component/cocktailRecipe/AppNav';
import CocktailListWithMobx from './component/cocktailListWithMobx';
import CocktailRecipeWithMobx from './component/cocktailRecipeWithMobx';
import TodoList from './component/todoList/TodoList';
import RnFirebase from './component/rnFirebase/RnFirebase';
import SongFinder from './component/songFinder/SongFinder';

class App extends Component {
  render() {
    return (
      // <CocktailRecipeWithMobx />
      // <TodoList />
      // <RnFirebase />
      <SongFinder />
    );
  }
}

export default App;