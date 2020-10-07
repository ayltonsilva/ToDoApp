import React, { Component } from 'react';
import {
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

const { navigation } = this.props.navigation;

class HomeScreen extends Component {
  state = {
    email: "",
    password: "",
  }
  

  onLogin (){
    const user = {
      email: "",
      password: ""
    };
    user[email] = this.state.email;
    user[password] = this.state.password;
    this.props.onLogin(user);
  } 


  render(){
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
        <Text>You have { this.props.users.current.length } users.</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}
          />
        </View>
        <View style={styles.inputView} >
          <TextInput  
              style={styles.inputText}
              placeholder="Password..." 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({password:text})}
          />
        </View>
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={this.onLogin}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details');
        }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});

const mapDispatchToProps = dispatch => ({
  onLogin: (user) => {
    dispatch(verifyUser(user));
  },
});

const mapStateToProps = (state) => {
  const { users } = state
  return { users }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);