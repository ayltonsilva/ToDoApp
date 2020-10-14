import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { editTodo, showTodos } from '../store/TodosActions';

import {
  Button,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class EditTodoScreen extends Component {
  constructor(){
    super();
    this.state = {
      todo: "",
    }
  }

  onEditTodo = async (id) =>{
    const { todo } = this.state;
    const { navigation, editTodo, showTodos } = this.props;
  
    await editTodo(id, todo);
    await showTodos();
    navigation.navigate('To Do');
  } 

  render(){
    const { navigation, route} = this.props;
    const { itemId } = route.params;
    console.log(itemId);

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, height:"10%" }}>Edit To Do</Text>
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
          onPress={ () => this.onEditTodo(itemId)}
        >
          <Text>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.cancelBtn}
          onPress={() => navigation.goBack()}
        >
          <Text>Cancel</Text>
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
    backgroundColor:"green",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
  cancelBtn:{
    width:"25%",
    backgroundColor:"red",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
});

const mapDispatchToProps = dispatch => ({
    editTodo: (id, todo) => dispatch(editTodo(id, todo)),
    showTodos: () => dispatch(showTodos())

});

const mapStateToProps = ({todos}) => ({
  allTodos: todos.todos,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoScreen);