import React,{useEffect, useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    Button,
    TextInput,
    Alert,
  } from "react-native";
function Login(props) {
 const [number, setNumber] = useState(0)
 useEffect(()=>{

 },[setNumber])

 const handleRegister = ()=>{
  if (number.length === 10) {
    // console.log(number.length)
    props.setLogin(true)
    Alert.alert(
      'Registration','Registerd Sucessfully',[{
        text: 'OK'
      }]
    );
    alert("Registerd Sucessfully")
  // console.log(number)
  }else{
    Alert.alert(
      'Registration','Please Enter The Valid Number',[{
        text: 'OK'
      }]
    );
    alert("Please Enter The Valid Number")
  }
  
 }
  return (
    <ScrollView style={{padding: 15}} >
        <View >
        <View style={{ marginVertical: 12 }}>
                <Text style={{ textAlign: "center", fontSize:22,borderBottomWidth:1,borderBottomColor:'lightgrey' }}>Login</Text>
              </View>
            <View><TextInput placeholder='Enter Your Number' style={{height:40,paddingHorizontal:20,marginBottom:25,borderWidth:2,borderColor:'black'}} onChange={(e)=>{
              
              setNumber(e.target.value)
              
              
            }} /></View>
            <Button title='SUBMIT' color='green' onPress={()=>{handleRegister()}} />
            <View style={{marginTop:10}} ><Text style={{textAlign:'center'}}>Will do it later</Text></View>
        </View>
    </ScrollView>
  )
}

export default Login