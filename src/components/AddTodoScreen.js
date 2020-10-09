import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../store/TodosActions';

import {
  Button,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class AddTodoScreen extends Component {
  constructor(){
    super();
    this.state = {
      todo: "",
    }
  }
  onAddTodo = () =>{
    const { todo } = this.state;
    const { navigation, addTodo } = this.props;
  
    addTodo(todo);
    console.log("Hey");
    navigation.navigate('To Do');
  } 
  render(){
    const { navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, height:"10%" }}>Add To Do</Text>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              autoCorrect={false}
              autoCapitalize = 'none'
              placeholder="To Do..." 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({todo: text})}
            />
          </View>
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={ () => this.onAddTodo()}
        >
          <Text>Confirm</Text>
        </TouchableOpacity>
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
    width:"30%",
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
    addTodo: (todo) => 
    dispatch(addTodo(todo))

});

const mapStateToProps = ({todos}) => ({
  allTodos: todos.todos,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoScreen);