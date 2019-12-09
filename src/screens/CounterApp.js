/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
} from 'react-native';

import { connect } from 'react-redux';
import { INCREASE, DECREASE } from '../actions/counterAction';

class CounterApp extends React.Component {
    render() {
        return (<View style={styles.container}>
            <Button onPress={() => {
                this.props.increase()
            }} title='Increase' />
            <Text style={{ textAlign: 'center' }}>count : {this.props.count} </Text>
            <Button onPress={() => {
                this.props.decrease()

            }} title='Decrease' />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

const mapStateToProps = (props) => {
    return {
        counterState: props.counterState,
        count: props.counterState.count
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        increase: () => { dispatch({ type: INCREASE, payload: 'heinhtet' }) },
        decrease: () => { dispatch({ type: DECREASE }) }
    }
}



export default connect(mapStateToProps, mapStateToDispatch)(CounterApp);
