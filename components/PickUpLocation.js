import React from 'react'
import { ScrollView,View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import LogoTitle from './LogoTitle.js'

class PickUpLocation extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        headerTitle: <LogoTitle title='Pick Up Location'/>,
    };

    render() {
        return (
        <ScrollView style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
            {/* Pick up location */}
            <View style={{backgroundColor: 'white'}}>
                <View style={{flex:1, margin:17, padding: 5, alignItems: 'center',
                    borderWidth: 1, flexDirection: 'row', height: 50}}>
                <Icon name="map-marker" size={30} color="#6b07bc" />
                <Text style={{flex: 2, marginLeft:15}}>Pick Up Location</Text>
                </View>
            </View>
            </ScrollView>
            
            {/* Spacer */}
            <View style={{margin: 5}}/>
            
            <ScrollView style={{flex: 1, backgroundColor: '#EAF0F3',  height: '100%'}}>
            <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center' }}>

                <View style={{flex:1, padding:5, flexDirection: 'row', alignItems: 'center', width: '90%', height: 50, backgroundColor: 'white'}}>
                <Icon name="gear" size={30} color="#6b07bc" />
                <Text style={{flex: 2, marginLeft:15}}>Pick Up Location</Text>
                </View>

                {/* Spacer */}
                <View style={{margin: 5}}/>

                <View style={{flex:1, padding:5, flexDirection: 'row', alignItems: 'center', width: '90%', height: 50, backgroundColor: 'white'}}>
                <Icon name="map-marker" size={30} color="#6b07bc" />
                <Text style={{flex: 2, marginLeft:15}}>Pick Up Location</Text>
                </View>

                {/* Spacer */}
                <View style={{margin: 5}}/>

                <View style={{flex:1, padding:5, flexDirection: 'row', alignItems: 'center', width: '90%', height: 50, backgroundColor: 'white'}}>
                <View style={{flex:2, marginLeft:15, flexDirection: 'column'}}>
                    <Text style={{fontWeight: "bold"}}>Home</Text>
                    <Text style={{color: "#E8EDF2"}}>Pick Up Location</Text>
                </View>  
                <Icon name="star" size={30} color="yellow" />
                </View>

                {/* Spacer */}
                <View style={{margin: 5}}/>

                <View style={{flex:1, padding:5, flexDirection: 'row', alignItems: 'center', width: '90%', height: 50, backgroundColor: 'white'}}>
                <View style={{flex:2, marginLeft:15, flexDirection: 'column'}}>
                    <Text style={{fontWeight: "bold"}}>Work</Text>
                    <Text style={{color: "#E8EDF2"}}>Pick Up Location</Text>
                </View>  
                <Icon name="star" size={30} color="yellow" />
                </View>

                {/* Spacer */}
                <View style={{margin: 5}}/>

                <View style={{flex:1, padding:5,flexDirection: 'row', alignItems: 'center', width: '90%', height: 50, backgroundColor: 'white'}}>
                <View style={{flex:2, marginLeft:15, flexDirection: 'column'}}>
                    <Text style={{fontWeight: "bold"}}>Daily Market</Text>
                    <Text style={{color: "#E8EDF2"}}>Pick Up Location</Text>
                </View>  
                <Icon name="star" size={30} color="#E8EDF2" />
                </View>

                {/* Spacer */}
                <View style={{margin: 5}}/>

                <View style={{flex:1, padding:5, flexDirection: 'row', alignItems: 'center', width: '90%', height: 50, backgroundColor: 'white'}}>
                <View style={{flex:2, marginLeft:15, flexDirection: 'column'}}>
                    <Text style={{fontWeight: "bold"}}>Hospital</Text>
                    <Text style={{color: "#E8EDF2"}}>Pick Up Location</Text>
                </View>  
                <Icon name="star" size={30} color="#E8EDF2" />
                </View>
            
            </View>
            </ScrollView>

        </ScrollView>
        )
    }
}

export default PickUpLocation