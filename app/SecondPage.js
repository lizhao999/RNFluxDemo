/**
 * Created by Lizhao on 2017/4/24.
 */
import React, { Component } from 'react'
import {
    Navigator,
    Text,
    View,
    AsyncStorage,
    TouchableHighlight
} from 'react-native'
import AppStore from './stores/AppStore'
import AppActions from './actions/AppActions'
export default class SecondPage extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            number:AppActions.getNumberAction()

        }
    }
    componentDidMount() {
        AppStore.addChangeListener(this._onChange.bind(this));
    }
    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange.bind(this));
    }
    _onChange() {
        this.setState({
            number: AppStore.getNumber()
        });
    }
    render(){
        return (
            <View style={{flex:1,justifyContent:'space-around',alignItems: 'center',backgroundColor:'#eee'}}>
                <Text>{this.state.number}</Text>
                <TouchableHighlight onPress={()=>{
                    AppActions.addNumberAction(10);
                }}>
                    <Text>增加</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>{
                    const navigator = this.props.navigator
                    if (navigator) {
                        navigator.pop()
                    }
                }}>
                    <Text>返回页面</Text>
                </TouchableHighlight>
            </View>
        )
    }
}