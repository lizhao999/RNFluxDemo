/**
 * Created by Lizhao on 2017/4/25.
 */
import React, { Component } from 'react'
import {
    Navigator,
    Text,
    View,
    AsyncStorage,
} from 'react-native'
import HomePage from './HomePage'
export default class Main extends Component
{
    constructor(props)
    {
        super(props)
    };

    render(){

        return(
            <Navigator initialRoute={{
                params:{
                    titleText:'主页',
                },
                name:'MainTabbar',
                component: HomePage,
            }}
                           configureScene={(route) => {
                               if (route.sceneConfig) {
                                   let res=route.sceneConfig;
                                   res.gestures=null;
                                   return res;
                               }
                               return Navigator.SceneConfigs.FloatFromRight;
                           }}
                           renderScene={(route, navigator) => {
                               let Component=route.component;
                               return<Component {...route.params} navigator={navigator}/>
                           }}
                           style={{flex:1}}
            />
        )
    }

}