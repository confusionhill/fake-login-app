// HomeScreen.js
import React, { Component } from 'react';
import { View, Button } from 'react-native';

class HomeScreen extends Component {
  handleLogout = () => {
    // You can add your logout logic here
    // After logout, navigate back to the Login screen
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View>
        <Button title="Logout" onPress={this.handleLogout} />
      </View>
    );
  }
}

export default HomeScreen;
