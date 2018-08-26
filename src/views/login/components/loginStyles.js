import { StyleSheet } from 'react-native'

const LoginStyles = StyleSheet.create({
    scroll:{
        width:'100%',
        height:'100%',

    },
    mainContainer:{
        width:'100%', 
        height:'100%', ...StyleSheet.absoluteFillObject, 
        backgroundColor:'#42A5F5BE', 
        justifyContent:'center'

    },
    container:{
        // ...StyleSheet.absoluteFillObject,
        justifyContent:'center',
        alignItems:'center',
        height:'100%'

    },
    loginBox:{
        borderRadius:10,
        backgroundColor:'#F9F9F9',
        justifyContent:'center',
        alignItems:'center',
        padding:0,
        margin:0,
    },
    textField:{
        width:'70%'
    },
    logo:{
        backgroundColor:'white', 
        borderRadius:50, 
        height:70, 
        width:70, 
        justifyContent:'center', 
        alignItems:'center',
        zIndex:1,
        transform:[{translateY:35}]
    },
    logoImg:{
        width:60, 
        height:60, 
        resizeMode:'cover',
        borderWidth:1
    },
    titleStyle:{
        marginTop:50,
        fontSize:16,
        fontWeight:'400',
        color:'#607D8B'
    },
    ingresarBtn:{
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        borderColor: '#00E676',
        width:'45%',
        height:35,
        justifyContent:'center',
        alignItems:'center'
    },
    ingresarText:{
        fontSize:16,
        color: '#00C853',
        fontWeight: '400'
    },
    bannerGris:{
        height:37.5,
        marginTop:20, 
        backgroundColor:'#455A64',
        width:'100%', 
        borderBottomStartRadius:10,
        borderBottomEndRadius:10
    },
    btnRegistro:{
        height:40, 
        backgroundColor:'#B9F6CA', 
        marginTop:10, 
        borderRadius:5, 
        justifyContent:'center',
        alignItems:'center', 
        width:'80%',
    },
    registroTxt:{
        color:'#546E7A', 
        fontSize:16, 
        fontWeight:'400'
    }
})

export {
    LoginStyles
}