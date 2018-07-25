import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class LogoTitle extends React.Component {
  render() {
    return (
      <View>
          <Text> Confirm Order</Text>
      </View>
    );
  }
}

class ConfirmOrderScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Confirm Order</Text>
        <Icon name="rocket" size={30} color="#900" /> 
        <Button
          title="Order"
          onPress={() => this.props.navigation.navigate('PickUp',{})}
        />
      </View>
    );
  }
};

class PickUpLocationScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pickup Location</Text>
        <Button
          title="Back"
          onPress={() => this.props.navigation.navigate('Order', {})}
        />
      </View>
    );
  }
};

const RootStack = createStackNavigator(
  {
    Order: ConfirmOrderScreen,
    PickUp: PickUpLocationScreen
  },
  {
    initialRouteName: 'Order',
    /* The header config is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}