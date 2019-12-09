import React from 'react';
import {
    View,
    Text,
    Button
}
    from 'react-native';


class HomeScreen extends React.Component {

    url = ''

    constructor(props) {
        super(props)
        console.log(" PROPS " + JSON.stringify(props))
        this.state = {
            isLoading: false,
            error: null,
            success: null
        }
    }

    componentDidMount() {

    }

    apiCall() {
        this.setState({
            isLoading: true
        })
        fetch(this.url).then(response => {
            this.setState({
                isLoading: false,
                error: null,
                success: response
            })
            console.log("RESPONSE " + JSON.stringify(response))
        })
            .catch(e => {
                this.setState({
                    isLoading: false,
                    error: e
                })
                console.log("e " + JSON.stringify(e))

            })
    }

    static navigationOptions = {
        headerTitle: () => <Text>title</Text>,
        headerRight: () => (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
            />
        ),
    };

    goDetail() {
        this.props.navigation.navigate('Detail')
    }

    render() {
        return (<View>
            <Text>HomePage</Text>
            <Button title='DETAIL' onPress={() => {
                this.goDetail()
            }}>
                Next Detail
    
            </Button>
            <Button title='API CALL' onPress={() => { this.apiCall() }} ></Button>
            {this.state.isLoading ? <Text>LOADING.....</Text> : <Text>LOADED</Text>}
            {this.state.error ? <Text>ERROR : {JSON.stringify(this.state.error)}</Text> : null}
            {this.state.success ? <Text>SUCCESS : {JSON.stringify(this.state.success)}</Text> : null}
            <Button title='Counter' onPress={() => this.props.navigation.push('CounterApp')}></Button>
        </View>)
    }
}

export default HomeScreen;