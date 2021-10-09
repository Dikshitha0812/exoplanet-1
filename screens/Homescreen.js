import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert, SafeAreaView } from 'react-native';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import axios from 'axios';

export default class Homescreen extends React.Component {
    constructor(){
        super();
        this.state = {
            listData: [],
            url :"http://127.0.0.1:5000/"
        }
    }
    componentDidMount(){
        this.getPlanets();
    }
    getPlanets = () => {
        const {url} = this.state;
        axios.get(url).then(response => {
            return this.setState({
                listData: response.data.data
            })
            console.log(this.state.listData)
        })
        .catch(error => {
            Alert.alert(error.message);
        })
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress =  {()=>{
                    this.props.navigation.navigate("Details")
                }}>
                    <Text>Home Screen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}