
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  Platform
} from 'react-native';


class App extends React.Component{

    constructor(props) {
        super(props)
        this.dataSource = [{},{},{}, {}, {}]
    }

    render() {
        return (
            this.renderContents()
        );
    }

    renderContents() {
        return (
            <ScrollView>
                <StatusBarCustom/>

                <View style = {styles.titleBar}>
                    <View style = {{width: '85%'}}>
                        <Text style = {styles.titleText}>Search City</Text>
                    </View>
                    <View style = {{width: '15%'}}>
                    <Image
                        style = {{width: 32, height: 32, alignSelf: "flex-end", marginRight: 20}}
                        source = {{uri: 'https://www.snc.edu/assets3/images/searchicon.png'}}/>
                    </View>
                </View>

                <View style = {styles.topContainer}>
                   <Text style = {styles.title1}>Current Weather</Text>

                    <Text style = {styles.textStyle4}>23 &deg;C</Text>  

                   <Text style = {styles.textStyle2}>Few Clouds</Text>
                   
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style = {{flexDirection: 'column', alignContent: 'flex-start', width: '50%'}}>
                            <Text style = {styles.textStyle1}>Humidity 83%</Text>
                            <Text style = {styles.textStyle1}>Winds 1 km/hr</Text> 
                        </View>
                        <View style = {{flex: 1}}>
                            <Image 
                                style = {{width: 100, height: 80, alignSelf: "flex-end", marginRight: 28}}
                                source = {{uri: 'https://cdn3.iconfinder.com/data/icons/bebreezee-weather-symbols/691/icon-weather-sunsleetlight-512.png'}}/>
                        </View>        
                    </View>
                </View>

                <Text style = {styles.textStyle3}>Foucs 5 days weather</Text>

                <FlatList
                    horizontal = {true}
                    data={this.dataSource}
                    renderItem={({ item, index }) => renderRow(item, colors[index], focus[index], days[index])}
                    keyExtractor={item => 'flatlist'}
                    style={{marginTop: 24, marginStart: 16, marginEnd: 16}}
                />
            </ScrollView>
        )
    }

};

    const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;

    function StatusBarCustom() {
            if (Platform.OS === 'ios') {
                return (
                <View style={{
                    width: "100%",
                    height: STATUS_BAR_HEIGHT,
                    backgroundColor: "#60D4FA"
                }}>
                    <StatusBar
                        barStyle="light-content"
                    />
                </View>
                );
            } else {
                return(
                    <StatusBar
                        backgroundColor = "#60D4FA"
                        barStyle="light-content"
                    />
                )
            }
    }

    const colors = ["#536958", "#7862D9", "#8DED67", "#2fe2d4", "#ef9739"]

    const focus = ["23", "28.58", "28", "30", "27"]

    const days = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    const renderRow = (item, color, focus, day) =>{
        return(
            <View style = {{width: 148, height: 256, borderRadius: 16, backgroundColor: color, marginStart: 8}}>
                <Text style = {{color: "white", fontSize: 18, fontWeight: "bold", alignSelf: "center", marginTop: 8}}>{day}</Text>
                <Image 
                style = {{width: 80, height: 80, alignSelf: "center", marginTop: 8}}
                source = {{uri: 'https://cdn3.iconfinder.com/data/icons/bebreezee-weather-symbols/559/icon-weather-sunny-512.png'}}/>
                <Text style = {{color: "white", fontSize: 24, fontWeight: "bold", alignSelf: "center", marginTop: 8}}>{focus} &deg;C</Text>
                <Text style = {{color: "white", fontSize: 14, alignSelf: "center", marginTop: 8, fontWeight: "bold"}}>21.62 &deg;C</Text>
                <Text style = {{color: "white", fontSize: 14, alignSelf: "center", marginTop: 32, fontWeight: "bold"}}>23 &deg;C</Text>
            </View>
        ); 
    }

    const styles = StyleSheet.create({
    titleBar: {
        height: 40,
        backgroundColor: "#60D4FA", 
        flexDirection: "row"
    },
    topContainer: {
        backgroundColor: "#60D4FA",
        width: '90%',
        height: 260,
        alignSelf: "center",
        marginTop: 32,
        borderRadius: 24
    },
    titleText: {
        marginStart: 30 ,
        color: "white", 
        alignSelf: "center", 
        fontSize: 18, 
        fontWeight: "bold", 
        marginTop: 4
    },
    textStyle1: {
        marginLeft: 20, 
        color: "white", 
        fontSize: 16, 
        fontWeight: "bold", 
        marginTop: 8
    },
    textStyle2: {
        color: "white", 
        alignSelf: "center", 
        fontSize: 18, 
        fontWeight: "bold", 
        marginTop: 8
    },
    textStyle3: {
        color: "black",
        alignSelf: "center", 
        marginLeft: 20, 
        fontSize: 16, 
        fontWeight: "bold", 
        marginTop: 32
    },
    title1: {
        color: "white", 
        alignSelf: "center", 
        fontSize: 16, 
        marginTop: 8, 
        fontWeight: "500", 
        fontWeight: "bold"
    },
    textStyle4: {
        color: "white", 
        alignSelf: "center", 
        fontSize: 52, 
        fontWeight: "bold", 
        marginTop: 8
    }
});

export default App;