import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CocktailList from "./CocktailList";
import CocktailDetail from "./CocktailDetail";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default class AppNav extends React.Component {
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="List" component={CocktailList}
						options={{ title: '칵테일 목록', headerRight: () => (<Button title="info" onPress={() => alert("hello")}></Button>),
						headerStyle:{ backgroundColor: '#f4511e'}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
					}} />
					<Stack.Screen name="Detail" component={CocktailDetail} options={{title: '상세'}} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}