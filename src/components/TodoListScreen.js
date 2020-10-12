import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class TodoListScreen extends Component {
  render(){
    const { navigation, allTodos} = this.props;
    const todosList = allTodos.map((todo, index) => 
      <Text key={index} style={styles.todoItem}>{todo}</Text>);
    return (
      <ScrollView style={styles.container}>
          <Text style={{ fontSize: 30, height: "10%" }}>To Do</Text>
          { todosList }
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={() => {
            navigation.navigate('Add To Do');
          }}
        >
          <Text>Add To Do</Text>
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
  todoItem: {
    fontSize: 20,
    padding: 12,
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

const mapStateToProps = ({todos}) => ({
  allTodos: todos.todos,
});

export default connect(mapStateToProps)(TodoListScreen);
