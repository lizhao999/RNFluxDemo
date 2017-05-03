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
import SecondPage from './SecondPage'
import AppStore from './stores/AppStore'
// import AppActions from './actions/AppActions'
export default class HomePage extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            number:100
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
            <View style={{flex:1,justifyContent:'center',alignItems: 'center'}}>
                <Text style={{padding:50}}>{this.state.number}</Text>
                <TouchableHighlight onPress={()=>{
                    const navigator = this.props.navigator
                    if (navigator) {
                        navigator.push(
                            {
                                name:'SecondPage',
                                component:SecondPage,
                                params:{
                                    getRegionSelectText:(text)=>{
                                        this.setState({regionSelect:text})
                                    }
                                }
                            }
                        )
                    }

                }}>
                    <Text>下一个页面</Text>
                </TouchableHighlight>

            </View>
        )
    }
}