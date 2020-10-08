import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {addUser} from '../store/UsersActions';

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class SignupScreen extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    }
  }

  onSignUp = () => {
    const { password, email, confirmPassword } = this.state;
    const {navigation, onSignUp} = this.props;
    const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if(password.length > 8 && expression.test(email.toLowerCase())){
      if (password == confirmPassword){
        onSignUp(this.state.email);
        navigation.navigate('Details');
      }
      else{
        alert("Different passwords");
      }
    }
    else{
      alert("Invalid email or password");
    }
  }

  render(){
    const { navigation } = this.props;
    return (
      <View style={styles.titleView}>
        <Text style={{ fontSize: 30, height:"10%" }}>Sign Up</Text>
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
        <View style={styles.inputView} >
          <TextInput
              secureTextEntry={true}
              autoCorrect={false}  
              style={styles.inputText}
              placeholder="Confirm Password..." 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({confirmPassword:text})}
          />
        </View>
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={
            () => this.onSignUp() 
          }
        >
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        

        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
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
  onSignUp: (email) => 
    dispatch(addUser(email))

});

export default connect(mapDispatchToProps)(SignupScreen);