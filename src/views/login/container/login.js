import React, { Component } from 'react'
import {
    View,
    ImageBackground,
    Image,
    StyleSheet,
    ScrollView,
    Text,
    Animated
} from 'react-native'
import LightBox from '../components/lightBox'
//Libraies
//Styles
import { LoginStyles } from '../components/loginStyles'
// Dimensions

export default class LoginPage extends Component {

    constructor() {
        super()
        this.containerRef = React.createRef()
        this.state = {
            usuario: '',
            password: '',
            registroOpacity: new Animated.Value(0)
        }
    }

    componentDidMount(){
        Animated.timing(this.state.registroOpacity,{
            delay:800,
            toValue: 1,
            duration:200
        }).start()
    }
    render() {
        return (
            <ImageBackground source={require('../../../../assets/rnBg.jpg')}
                    style={StyleSheet.absoluteFillObject}
                    resizeMode='cover'
                    
                >
            <View style={LoginStyles.mainContainer}>

             <ScrollView contentContainerStyle={[LoginStyles.container]} style={{width:'100%', height:'100%'}} >

                   
                        <View style={[LoginStyles.logo]}>
                            <Image source={require('../../../../assets/reactLogo.png')}
                                style={LoginStyles.logoImg}
                                ></Image>
                        </View>
                            <LightBox
                                onChangePassword={(pass) => {
                                    this.setState({ password: pass })
                                }}
                                onChangeUser={(user) => {
                                    this.setState({ usuario: user })
                                }}
                                // onPressed={() => {
                                    //     let title = "usuario: " + this.state.usuario + "pass: " + this.state.password
                                    //     Alert.alert(title)
                                    // }}
                                    /> 
                            
                            <Animated.View style={[LoginStyles.btnRegistro,{ opacity:this.state.registroOpacity}]}>
                                <Text style={LoginStyles.registroTxt}>
                                    Registrate
                                </Text>
                            </Animated.View>
                            </ScrollView>
                </View>
                </ImageBackground>
        )
    }
}