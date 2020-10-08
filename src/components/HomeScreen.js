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
import {setUser} from '../store/UsersActions';

class HomeScreen extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
    }
  }

  onLogin = () => {
    const { email } = this.state;
    const {navigation, loginSucess, availableUsers} = this.props;

    if(availableUsers.includes(email)){
      loginSucess(email);
      navigation.navigate('Details');
    }
    else{
      alert("Invalid email or password");
    }
  } 


  render(){
    const { navigation, availableUsers } = this.props;
    

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
        <Text>You have { availableUsers.length } users.</Text>
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
            () => this.onLogin() 
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
  loginSucess: (email) => 
    dispatch(setUser(email))

});
const mapStateToProps = ({ users }) => ({
  availableUsers : users.available
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);