import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Icon } from 'react-native-elements';
import {removeTodo, showTodos} from '../store/TodosActions';


class TodoListScreen extends Component {
  componentDidMount(){
    const { showTodos } = this.props;
    showTodos();
  }

  onRemoveTodo = (id) => {
    const { removeTodo, showTodos } = this.props;

    removeTodo(id);
    showTodos();
  } 

  render(){
    const { navigation, allTodos} = this.props;
    console.log(allTodos);

    return (
      <ScrollView contentContainerStyle={styles.container} >
            <Text style={{ fontSize: 30, height: "10%" }}>To Do</Text>
            {allTodos.map(todo => (
              <View key={todo.id} style = {{flexDirection: 'row'}}>
                <Text style={styles.todoItem}>{todo.text}</Text>
                <Icon 
                  name="trash" 
                  type="ionicon" 
                  color='red' 
                  style={{paddingLeft: 5, paddingTop: 12}}
                  onPress={() => this.onRemoveTodo(todo.id)}
                  />

              </View>))
            }
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={() => {
            navigation.navigate('Add To Do');
          }}
        >
          <Text>Add To Do</Text>
        </TouchableOpacity>
        </ScrollView>
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
    backgroundColor:"green",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});

const mapDispatchToProps = dispatch => ({
  removeTodo: (id) => dispatch(removeTodo(id)),
  showTodos: () => dispatch(showTodos())

});

const mapStateToProps = ({todos}) => ({
  allTodos: todos.todos,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListScreen);
