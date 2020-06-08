import React from 'react';
import { Button, AsyncStorage, Text, View } from 'react-native';
import CocktailList from "./CocktailList";
import CocktailDetail from "./CocktailDetail";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from "./Settings";
import config from './config';

const Stack = createStackNavigator();

export default class AppNav extends React.Component {
  loadSettings = async () => {
		let largeText = await AsyncStorage.getItem( 'largeText' );
		if( largeText ) {
			largeText = Boolean( largeText );
		}
		else {
			largeText = false;
		}
		config.largeText = largeText;
	};
	constructor() {
		super();
		this.loadSettings();
	}
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="List" component={CocktailList}
						options={{ title: '칵테일 목록 Mobx', headerLeft: () => (<Button title="mobx" color="#fff" onPress={() => alert("mobx")}></Button>),
						headerStyle:{ backgroundColor: '#f4511e'}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
					}} />
					<Stack.Screen name="Detail" component={CocktailDetail} options={{title: '상세'}} />
					<Stack.Screen name="Settings" component={Settings} options={{title: '환경설정'}} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}