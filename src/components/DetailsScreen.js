import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  View,
  Text,
} from 'react-native';

class DetailsScreen extends Component {
  render(){
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>Current user: { this.props.users.current.email } </Text>

        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details')
          }
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { users } = state
  return { users }
};

export default connect(mapStateToProps)(DetailsScreen);
