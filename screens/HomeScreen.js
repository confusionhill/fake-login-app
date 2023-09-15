// HomeScreen.js
import React, { Component } from 'react';
import Instana from '@instana/react-native-agent';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class HomeScreen extends Component {
  state = {
    key: '',
    value: '',
  };
  handleLogout = () => {
    // You can add your logout logic here
    // After logout, navigate back to the Login screen
    Instana.setView('Login Screen');
    this.props.navigation.navigate('Login');
  };

  handleMetaData = () => {
    const { key, value } = this.state;
    Instana.setMeta(key, value);
  }

  render() {
    return (
      <View>
        <Button title="Logout" onPress={this.handleLogout} />
        {/* <Text style={styles.label}>Metadata Key:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ key: text })}
          value={this.state.username}
        />
        <Text style={styles.label}>Metadata Value:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ value: text })}
          value={this.state.password}
        />
        <Button title="Send metadata" onPress={this.handleMetaData} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});

export default HomeScreen;
