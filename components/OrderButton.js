import React from 'react'
import {Button} from 'react-native'
import { withNavigation } from 'react-navigation';

class OrderButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Button
                title="Order"
                color="#6b07bc"
                onPress={() => this.props.navigation.navigate('PickUp',{})}/>
        )
    }
}

export default withNavigation(OrderButton)