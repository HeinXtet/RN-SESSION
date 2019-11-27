import React from 'react';
import {
    View,
    Text,
    Button
}
from 'react-native';

class DetailScreen extends React.Component {
    render(){
        return(<View>
            <Text>DetailScreen</Text>
            <Button title='BACK' onPress={()=>{
               this.props.navigation.goBack()
            }}>
                 Next Detail

            </Button>
        </View>)
    }
}

export default DetailScreen;