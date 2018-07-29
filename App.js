import React from 'react'
import { createStackNavigator } from 'react-navigation'

import LogoTitle from './components/LogoTitle.js'
import ConfirmOrder from './components/ConfirmOrder.js'
import PickUpLocation from './components/PickUpLocation.js'

class ConfirmOrderScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle title='Confirm Order' />,
  };

  render() {
    return (
      <ConfirmOrder/>
    );
  }
};

class PickUpLocationScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle title='Pick Up Location'/>,
  };

  render() {
    return (
      <PickUpLocation/>
    );
  }
};

const ApplicationStack = createStackNavigator(
  {
    Order: ConfirmOrderScreen,
    PickUp: PickUpLocationScreen
  },
  {
    initialRouteName: 'Order',
    /* The header config is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ffff'
      },
      headerTintColor: 'black'
    },
  }
);

export default class App extends React.Component {
  render() {
    return <ApplicationStack />
  }
}