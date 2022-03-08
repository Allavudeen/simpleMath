import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Num1: 0, Num2: 0 };
  }
  sum = () => {
    var N1 = parseInt(this.state.Num1);
    var N2 = parseInt(this.state.Num2);
    var R = N1 + N2;
    alert(N1 + '+' + N2 + '=' + R);
  }
  subtract = () => {
    var N1 = parseInt(this.state.Num1);
    var N2 = parseInt(this.state.Num2);
    var R = N1 - N2;
    alert(N1 + '-' + N2 + '=' + R);
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.txtinput}
          keyboardType='numeric'
          placeholder='Num1'
          onChangeText={Num1 => this.setState({ Num1 })} />
        <TextInput
          style={styles.txtinput}
          keyboardType='numeric'
          placeholder='Num2'
          onChangeText={Num2 => this.setState({ Num2 })} />
        <View style={styles.vbtn}>
          <Button title="Sum" onPress={this.sum} />
        </View>
        <View style={styles.vbtn}>
          <Button title="Subtract" onPress={this.subtract} />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8096ad',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtinput: {
    width: 200,
    backgroundColor: '#d96e66',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#c21f13',
    margin: 10,
    padding: 5,
  },
  vbtn: {
    width: 150,
    backgroundColor: '#1a6cc4',
    margin: 5,
  },
});
