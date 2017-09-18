import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';



class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    const {navigate} = this.props.navigation;
    return(
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate('Chat', {user: 'Stephen'})}
          title="Chat with Stephen" />
      </View>
    )
  }
};

class ChatScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `Chat with ${navigation.state.params.user}`
  });

  render() {
    const {params} = this.props.navigation.state;
    return(
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    )
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
});

export default SimpleApp;

AppRegistry.registerComponent('ChatApp', () => SimpleApp);
