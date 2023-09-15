import React, { Component } from 'react';
import Instana from '@instana/react-native-agent';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
  };
  componentDidMount() {
  }

  handleLogin = () => {
    const { username, password } = this.state;
    if (username == '' || password == '') {
      alert('Login failed. Please check your credentials.');
      return
    }
    this.setupInstana(username, password)
        .then(() => {
          console.log('Fetch operation completed.');
        })
        .catch((error) => {
          console.error('Fetch operation failed:', error);
        });
  };

  generateRandomString(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomString += charset[randomIndex];
    }
    
    return randomString;
  }
  

  async setupInstana(phoneNum, email) {
    Instana.setup('P7BW_ZNaSoaYfsDVlvmmSg', 'https://eum-green-saas.instana.io/mobile', null);
    Instana.setUserID(this.generateRandomString(10));
    Instana.setUserEmail(phoneNum);
    Instana.setUserName(email);
    Instana.setView('Home View');
    Instana.setIgnoreURLsByRegex(['http://localhost:8081.*']);
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ username: text })}
          value={this.state.username}
        />
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
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

export default LoginScreen;
