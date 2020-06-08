import * as React from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage, Button } from 'react-native';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thanosNumber :null,
    }
    this.execute();
  }
  execute = async () => {
    const result = await AsyncStorage.getItem("thanosNumber");
    if (result) {
      this.setState({ thanosNumber: Number(result) });
    } else {
      this.click();
    }
  }
  click = () => {
    const newNumber = Math.random();
    this.setState({ thanosNumber: newNumber });
    AsyncStorage.setItem("thanosNumber", newNumber.toString());
  }
  result = () => {
    let resultText = "you are survive";
    if(this.state.thanosNumber === null) resultText = "";
    else if(this.state.thanosNumber < 0.5) resultText = "turn to dust";
    return  <Text style={styles.welcome}>{ resultText }</Text>
  }
  render() {
    return (
      <View style={styles.container}>
        {this.result()}
        <View>
          <Button title={"click"} onPress={ this.click }/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
