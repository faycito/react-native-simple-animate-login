import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback, Animated,Dimensions, Alert, ScrollView } from 'react-native'

import { TextField } from 'react-native-material-textfield'

import { LoginStyles } from './loginStyles'
const { width } = Dimensions.get('window')

export default class LightBox extends Component {

    constructor(props){
        super(props)
        this.loginBoxRef = React.createRef()
        this.state = {
            usuario: '',
            password: '',
            animateBoxHeigth: new Animated.Value(0) 
        }
    }
    componentWillMount() {
        Animated.timing(this.state.animateBoxHeigth,{
            delay:600,
            toValue: 320,
            duration:300
        }).start()
    }

    render() {
        let campos = this.state.usuario.length > 4 && this.state.password.length > 3 ? true : false
        const {  onChangePassword, onChangeUser, onPressed } = this.props
        return (
            <Animated.View style={[LoginStyles.loginBox,{height:this.state.animateBoxHeigth, width:'80%'}]}
            ref={loginBox => this.loginBoxRef = loginBox}
        >
            <View style={{width:'100%', height:'100%'}}>
                <View style={LoginStyles.loginBox}>
                <View>
                    <Text style={LoginStyles.titleStyle}>INICIAR SESIÓN</Text>
                </View>
                <View style={LoginStyles.textField}>
                    <TextField
                        baseColor='rgb(0, 145, 234)'
                        label="Usuario"
                        fontSize={14}
                        // value={usuario}
                        value={this.state.usuario}
                        onChangeText={(user) => {
                            onChangeUser(user)
                            this.setState({ usuario: user })
                        }}
                        tintColor='rgb(0, 145, 234)'
                        onFocus={() => {}}
                        textColor='#757575'
                    />
                </View>
                <View style={LoginStyles.textField}>
                    <TextField
                        secureTextEntry={true}
                        baseColor='rgb(0, 145, 234)'
                        label="Contraseña"
                        // value={password}
                        value={this.state.password}
                        onChangeText={(pass) => {
                            onChangePassword( pass)
                            this.setState({ password: pass })
                        }}
                        fontSize={this.state.password.length > 0 ? 18 : 14}
                        tintColor='rgb(0, 145, 234)'
                        textColor='#757575'
                    />
                </View>
                <TouchableWithoutFeedback
                    disabled={!(campos)}
                    onPress={() => {
                        // onPressed()
                        let title = "usuario: " + this.state.usuario + "pass: " + this.state.password
                        Alert.alert(title)
                    }}
                >
                    <View style={[LoginStyles.ingresarBtn, campos ? null : { borderColor: '#bebebe'} ]}>
                        <Text style={[LoginStyles.ingresarText, campos ? null : { color: '#bebebe'}]}>Ingresar</Text>
                    </View>
                </TouchableWithoutFeedback>
        </View>
        <View style={LoginStyles.bannerGris}></View>
        </View>
        </Animated.View>
        )
    }
}