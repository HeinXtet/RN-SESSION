import {
    TouchableHighlight,
    StyleSheet,
    Text
} from 'react-native'
import React from 'react'

export const  Button = ({style,title,...props}) => {
    return(
    <TouchableHighlight 
    underlayColor={'red'}
    style={[styles.core,style]}
    {...props}
    >
    <Text style={{}}>{title}</Text>
    </TouchableHighlight>)
}

const styles = StyleSheet.create({
    core  :{
        backgroundColor : 'gray',
        width : '90%',
        justifyContent : 'center',
        alignItems : "center",
        height : 55,
    }
})