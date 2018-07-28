import React from 'react';
import { Picker, TextInput, Button, ScrollView,View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import RadioGroup from 'react-native-radio-buttons-group';

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

  state = {
    payer: [
      {
        label: 'Sender',
        value: "sender",
      },
      {
        label: 'Receiver',
        color: 'receiver',
      }
    ],
  };

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: '#EAF0F3', padding: 12}}>
          
          {/* Your Package Photo (+)*/}
          <View style={{flex:1, alignItems: 'center', padding: 5, flexDirection: 'row', backgroundColor: 'white', height: 50}}>
            <Text style={{flex: 2}}>Your Package Photo</Text>
            <Icon name="plus-circle" size={30} color="#6b07bc" />
          </View>

          {/* Spacer */}
          <View style={{margin: 5}}/>

          {/* Enter contact number*/}
          <View style={{backgroundColor: 'white', padding: 7}}>
            <Text>Enter contact number (sender and receiver) and note for driver.</Text>

            {/* Spacer line */}
            <View style={{margin: 5,borderBottomColor: '#EFF0F1', borderBottomWidth: 1}}/>

            {/* Header */}
            <View style={{flex:1, alignItems: 'center', padding: 5, flexDirection: 'row'}}>
              <Icon name="map-marker" size={30} color="#6b07bc" />
              <Text style={{color:"#6b07bc", flex: 2, marginLeft: 7, fontWeight: "bold"}}>Sender</Text>
            </View>
            {/* Alamat Sender text */}
            <View style={{padding: 5, marginLeft:25}}>
              <Text style={{color:"#ADB5BD"}}>JL. Jendral Sudirman no.1</Text>
            </View>
            {/* Sender name */}
            <View style={{flex:1, alignItems: 'center', padding: 5, marginLeft:25, flexDirection: 'row'}}>
              <Icon name="user-circle" size={15} color="#6b07bc" />
              <TextInput placeholder=" Name" style={{marginLeft: 15, paddingBottom:2, flex:2}} />
            </View>
            {/* Sender phone */}
            <View style={{flex:1, alignItems: 'center', padding: 5, marginLeft:25, flexDirection: 'row'}}>
              <Icon name="phone" size={18} color="#6b07bc" />
              <TextInput placeholder=" Phone Number" style={{marginLeft: 15, paddingBottom:2, flex:2}} />
            </View>
            {/* Notes */}
            <View style={{flex:1, alignItems: 'center', padding: 5, marginLeft:25, flexDirection: 'row'}}>
              <TextInput placeholder=" Notes, Instruction, or Location details" style={{flex: 1, paddingBottom:2}} />
            </View>

            {/* Spacer line */}
            <View style={{margin: 5,borderBottomColor: '#EFF0F1', borderBottomWidth: 1}}/>

            <View style={{flex:1,padding: 5, flexDirection: 'column'}}>
              <View style={{flex:1, alignItems: 'center', padding: 5, flexDirection: 'row'}}>
                <Icon name="map-marker" size={15} color="#bc8921" />
                <Text style={{color:"#bc8921", flex: 2, marginLeft: 7, fontWeight: "bold"}}>Receiver 1</Text>
              </View>

              {/* Spacer line */}
              <View style={{margin: 5,borderBottomColor: '#EFF0F1', borderBottomWidth: 1}}/>

              <View style={{flex:1, alignItems: 'center', padding: 5, flexDirection: 'row'}}>
                <Icon name="map-marker" size={15} color="#bc8921" />
                <Text style={{color:"#bc8921", flex: 2, marginLeft: 7, fontWeight: "bold"}}>Receiver 2</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <ScrollView style={{flex: 1,backgroundColor: '#EAF0F3', padding: 0}}>
          <View style={{flex:1,padding: 10, flexDirection: 'column', backgroundColor: 'white'}}>
              <View style={{flex:1, alignItems: 'center', padding: 5, flexDirection: 'row'}}>
                <Text style={{flex: 2, }}>Price</Text>
                <Text style={{}}>IDR 200.000</Text>
              </View>

              <View style={{flex:1, alignItems: 'center', padding: 5, flexDirection: 'row'}}>
                <Text style={{flex: 2}}>Door to door (driver)</Text>
                <Text style={{}}>IDR   50.000</Text>
              </View>

              {/* Spacer line */}
              <View style={{margin: 5,borderBottomColor: '#EFF0F1', borderBottomWidth: 1}}/>

              {/* Total Payment */}
              <View style={{flex:1, alignItems: 'center', padding: 5, flexDirection: 'row'}}>
                <Text style={{color:"#6b07bc", flex: 2}}>Total Payment</Text>
                <Text style={{color:"#6b07bc", fontWeight: "bold"}}>IDR  250.000</Text>
              </View>

              {/* Spacer line */}
              <View style={{margin: 5,borderBottomColor: '#EFF0F1', borderBottomWidth: 1}}/>

              {/* Responsible for Payment */}
              <View style={{flex:1, padding: 5, flexDirection: 'column'}}>
                <Text style={{fontWeight: "bold"}}>Responsible for Payment</Text>
                {/* Who pay ? */}
                <View style={{flex:1, alignItems: 'center', padding: 5, flexDirection: 'row'}}>
                  <RadioGroup radioButtons={this.state.payer} onPress={this.onPress} flexDirection='row' />
                </View>
              </View>

              {/* Responsible for Payment */}
              <View style={{flex:1, padding: 5, flexDirection: 'column'}}>
                <Text style={{fontWeight: "bold"}}>Pay with</Text>
                {/* Who pay ? */}
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                  <View style={{width: 50, height: 50, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                    <Icon name="money" size={35} color="#bc8921" />
                    <Text style={{}}>Cash</Text>
                  </View>

                  {/* Spacer line */}
                  <View style={{margin: 15, borderLeftColor: '#EFF0F1', borderLeftWidth: 1}}/>

                  <View style={{width: 50, height: 50, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                    <Icon name="money" size={35} color="#bc8921" />
                    <Text style={{}}>Wallet</Text>
                  </View>

                  {/* Spacer line */}
                  <View style={{margin: 15, borderLeftColor: '#EFF0F1', borderLeftWidth: 1}}/>

                  <View style={{width: 50, height: 50, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                    <Icon name="credit-card" size={35} color="#bc8921" />
                    <Text style={{}}>Billed</Text>
                  </View>

                </View>
              </View>

              <Button
                title="Order"
                color="#6b07bc"
                onPress={() => this.props.navigation.navigate('PickUp',{})}/>
          </View>
        </ScrollView>

      </ScrollView>
    );
  }
};

class PickUpLocationScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: '#EAF0F3'}}>
          {/* Your Package Photo (+)*/}
          <View style={{flex:1, alignItems: 'center', flexDirection: 'row', backgroundColor: 'white', height: 50}}>
            <Icon name="map-marker" size={30} color="#6b07bc" />
            <Text style={{flex: 2, marginLeft:15}}>Pick Up Location</Text>
          </View>
        </ScrollView>
        
         {/* Spacer */}
         <View style={{margin: 5}}/>
        
        <ScrollView style={{flex: 1, backgroundColor: '#EAF0F3'}}>
          <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center' }}>

            <View style={{flex:1, padding:5, flexDirection: 'row', alignItems: 'center', width: '90%', height: 50, backgroundColor: 'powderblue'}}>
              <Icon name="map-marker" size={30} color="#6b07bc" />
              <Text style={{flex: 2, marginLeft:15}}>Pick Up Location</Text>
            </View>

            {/* Spacer */}
            <View style={{margin: 5}}/>

            <View style={{flex:1, padding:5, flexDirection: 'row', alignItems: 'center', width: '90%', height: 50, backgroundColor: 'powderblue'}}>
              <Icon name="map-marker" size={30} color="#6b07bc" />
              <Text style={{flex: 2, marginLeft:15}}>Pick Up Location</Text>
            </View>

            {/* Spacer */}
            <View style={{margin: 5}}/>

            <View style={{flex:1, padding:5, flexDirection: 'row', alignItems: 'center', width: '90%', height: 50, backgroundColor: 'powderblue'}}>
              <Text style={{flex: 2, marginLeft:15}}>Pick Up Location</Text>
              <Icon name="start" size={30} color="#6b07bc" />
            </View>

            {/* Spacer */}
            <View style={{margin: 5}}/>

            <View style={{flex:1, padding:5, flexDirection: 'row', alignItems: 'center', width: '90%', height: 50, backgroundColor: 'powderblue'}}>
              <Text style={{flex: 2, marginLeft:15}}>Pick Up Location</Text>
              <Icon name="start" size={30} color="#6b07bc" />
            </View>

            {/* Spacer */}
            <View style={{margin: 5}}/>

            <View style={{flex:1, padding:5,flexDirection: 'row', alignItems: 'center', width: '90%', height: 50, backgroundColor: 'powderblue'}}>
              <Text style={{flex: 2, marginLeft:15}}>Pick Up Location</Text>
              <Icon name="start" size={30} color="#6b07bc" />
            </View>

            {/* Spacer */}
            <View style={{margin: 5}}/>

            <View style={{flex:1, padding:5, flexDirection: 'row', alignItems: 'center', width: '90%', height: 50, backgroundColor: 'powderblue'}}>
              <Text style={{flex: 2, marginLeft:15}}>Pick Up Location</Text>
              <Icon name="start" size={30} color="#6b07bc" />
            </View>
          
          </View>
        </ScrollView>

      </ScrollView>
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
        backgroundColor: '#ffff'
      },
      headerTintColor: 'black'
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}