import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { Button, Badge, PricingCard, Header, Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';



class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}


let RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen
  },
  initialRouteName: 'Home'
});


class App extends Component {

  render() {
    return (
      <RootStack />
    );
  }
}



export default App;

