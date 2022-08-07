import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Button,
  Dimensions,
} from "react-native";
function OrderConfirmation() {


  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:10}}>
      <Text style={{fontSize:28}}>Your Order Successful.
      </Text>
      <Text style={{fontSize:20,padding:20}}>For the Security Reason, Please Close the Window.
      </Text>
      
    </View>
  )
}

export default OrderConfirmation