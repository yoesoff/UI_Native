import React from 'react'
import {View, Text} from 'react-native'

class LogoTitle extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text> {this.props.title}</Text>
            </View>
        )
    }
}

export default LogoTitle