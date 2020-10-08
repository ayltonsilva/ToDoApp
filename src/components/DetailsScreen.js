import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  StyleSheet,
  View,
  Text,
} from 'react-native';

class DetailsScreen extends Component {
  render(){
    const { navigation, currentUser } = this.props;
    return (
      <View style={styles.titleView}>
        <Text>Details Screen</Text>
        <Text>Current user: { currentUser.email } </Text>

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

const styles = StyleSheet.create({
  titleView: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
});

const mapStateToProps = ({users}) => ({
  currentUser: users.current
});

export default connect(mapStateToProps)(DetailsScreen);
