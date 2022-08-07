import React,{useRef,useState,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Button,
  Dimensions,
} from "react-native";




function Carts(props) {
  const [forRender1, setForRender1] = useState(0)
  

 

  useEffect(()=>{
    
  },[setForRender1])
  
  return (
    <ScrollView  horizontal={ Dimensions.get('window').width<500?(true):(false)  } >
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:10}}>
        <View>
          <Text style={{fontSize:18,fontWeight:450}}>{props.items.name}</Text>
          
        </View>
        <View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:10,borderColor:'lightgreen',borderWidth:2}} >
           <Text
           onPress={()=>{
            if (forRender1<10) {
              setForRender1(forRender1+1)
           }else{
              setForRender1(0)
           }
           props.setTotal(props.total+props.items.price)
        props.items.qty = props.items.qty +1;
        props.items.amount = props.items.amount + props.items.price
           }}
           style={{
            marginHorizontal: 7,
            color:'darkgreen',
            fontSize:25
           }}
           >+</Text>
            
            <Text style={{marginHorizontal:15, fontSize:18,fontWeight:450,color:'darkgreen' }}>{props.items.qty}</Text>
            <Text
            onPress={()=>{
              if (forRender1<10) {
                setForRender1(forRender1+1)
             }else{
                setForRender1(0)
             }
            if(props.items.qty>0){
              props.setTotal(props.total-props.items.price)
                props.items.qty = props.items.qty -1;
                props.items.amount = props.items.amount - props.items.price
            }} }
            style={{
              marginHorizontal: 7,
              color:'darkgreen',
              fontSize:25
            }}
            >-</Text>
           

            </View>
          
        </View>
        <View>
          <Text style={{fontSize:18,fontWeight:450}}>{props.items.amount}</Text>
        </View>
        </View>
      </ScrollView>
  );
}

export default Carts;
