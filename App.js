/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import { GET_USER } from './src/actions/userAction';
import {Button} from './src/components/Button';
import { flatMap } from 'rxjs/operators';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      userName : ''
    }
  }

  tirggerGetUser = ()=>{
      if(this.state.userName!=''){
        this.props.getUser(this.state.userName)
      }else{
        alert(
          "enter user name"
        )
      }
  }
  
  render(){
    return (<SafeAreaView style={styles.container}>
      <TextInput 
      style={{width : '90%',height : 50,borderWidth : 1,borderColor : 'black',margin : 16}}
      onChangeText={(text)=>{
        this.setState({
          userName : text
        })
      }}
      placeholder='enter state'
      />
      <Text>
        {JSON.stringify(this.props.userState)}
      </Text>
      <Button 
      style={{backgroundColor : 'yellow'}}
        title='Get User'
       onPress={()=> this.tirggerGetUser()}/>
    </SafeAreaView>)
  }
}

const styles = StyleSheet.create({
container : {
  flex:1,
  justifyContent : 'center',
  alignItems : 'center'
}
});

const mapStateToProps = (props) => {
  return {
    userState : props.userState,
    isLoading : props.userState.isLoading
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    getUser : (userName) => {
      dispatch({type : GET_USER, userName : userName})
    }
  }
}


export default connect(mapStateToProps,mapStateToDispatch)(App);
