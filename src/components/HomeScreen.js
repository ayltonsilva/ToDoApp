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
import {verifyUser} from '../store/UsersActions';

class HomeScreen extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
    }
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin (navigation){
    const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(this.state.password.length > 8 && expression.test(this.state.email.toLowerCase())){
      this.props.onLogin(this.state.email);
      navigation.navigate('Details');
    }
    else{
      alert("Invalid email or password");
    }
  } 


  render(){
    const { navigation } = this.props;
    

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
        <Text>You have { this.props.users.available.length } users.</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            autoCorrect={false}
            autoCapitalize = 'none'
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email: text})}
          />
        </View>
        <View style={styles.inputView} >
          <TextInput
              secureTextEntry={true}
              autoCorrect={false}  
              style={styles.inputText}
              placeholder="Password..." 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({password:text})}
          />
        </View>
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={
            () => this.onLogin(navigation) 
          }
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <Button
        title="Sign Up"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Sign Up');
        }}
      />
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
    backgroundColor:"ghostwhite",
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
  onLogin: (email) => 
    dispatch(verifyUser(email))

});

const mapStateToProps = (state) => {
  const { users } = state
  return { users }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);