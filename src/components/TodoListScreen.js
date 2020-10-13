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
import {removeTodo} from '../store/TodosActions';


class TodoListScreen extends Component {
  onRemoveTodo = (index) => {
    const { removeTodo } = this.props;

    removeTodo(index);
  } 

  render(){
    const { navigation, allTodos} = this.props;

    return (
      <ScrollView contentContainerStyle={styles.container} >
            <Text style={{ fontSize: 30, height: "10%" }}>To Do</Text>
            {allTodos.map((todo, index) => (
              <View key={index} style = {{flexDirection: 'row'}}>
                <Text style={styles.todoItem}>{todo}</Text>
                <Icon 
                  name="trash" 
                  type="ionicon" 
                  color='red' 
                  style={{paddingLeft: 5, paddingTop: 12}}
                  onPress={() => this.onRemoveTodo(index)}
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
  removeTodo: (index) => dispatch(removeTodo(index))

});

const mapStateToProps = ({todos}) => ({
  allTodos: todos.todos,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListScreen);
