import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen'
import Instana from '@instana/react-native-agent';

const Stack = createStackNavigator();

class App extends Component {
  componentDidMount() {
    //Instana.setup('P7BW_ZNaSoaYfsDVlvmmSg', 'https://eum-green-saas.instana.io/mobile', null);
    // // Instana.setUserID('123456');
    // // Instana.setUserEmail('My Name is');
    // // Instana.setUserName('+653 37363763');
    // Instana.setView('Main Delegate');
    // Instana.setIgnoreURLsByRegex(['http://localhost:8081.*']);
    console.log("starto....");
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
