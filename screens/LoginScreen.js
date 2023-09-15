import React, { Component } from 'react';
import Instana from '@instana/react-native-agent';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
  };
  componentDidMount() {
    Instana.setView('LoginScreen');
  }

  handleLogin = () => {
    const { username, password } = this.state;
    if (username == '' || password == '') {
      alert('Login failed. Please check your credentials.');
      return
    }
    Instana.setup('P7BW_ZNaSoaYfsDVlvmmSg', 'https://eum-green-saas.instana.io/mobile', null);
    Instana.setUserID('123456');
    Instana.setUserEmail(username);
    Instana.setUserName(password);
    Instana.setView('Main Delegate');
    Instana.setIgnoreURLsByRegex(['http://localhost:8081.*']);
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ username: text })}
          value={this.state.username}
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
          secureTextEntry={true}
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
