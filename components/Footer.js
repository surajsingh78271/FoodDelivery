import React, { useRef, useState,useEffect } from "react";
import { BottomSheet } from "react-native-sheet";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import Carts from "./Carts";
import Login from "./Login";
import Checkout from "./Checkout";

function Footer(props) {
  const [login, setLogin] = useState(false);
  // const [num, setNum] = useState(null)
  const bottomSheetCart = useRef(null);
  const bottomSheetLogin = useRef(null);
  const [total, setTotal] = useState(0)
   
  var sum = 0;
  for(let i=0;i<props.realData.length;i++){
    sum = props.realData[i].amount + sum
  }
  // setTotal(sum)
  // console.log(sum)
 

   const handleCart = ()=>{
    setTotal(sum)
    // for(let i=0;i<props.realData.length;i++){
    //   setTotal(props.realData[i].amount + total)
    // }
    // console.log(total)
    // console.log(props.realData.length)
     bottomSheetCart.current.show();
    //  console.log(props.realData)
     


   }

  const handleLogin = () => {
    setTotal(sum)
    
    if (login) {
      props.item.navigation.push("Checkout",[props.realData,total,setTotal,props]);
      // props.item.navigation.push("OrderConfirmation");
    } else {
      bottomSheetLogin.current.show();
    }
  }
  useEffect(()=>{
   
  },[props.setRealData])

  return (
    <View style={style.footer}>
      <View style={style.footerContent}>
        <View>
          <Text style={[style.footerColor,{color:'lightgreen',fontSize:30,fontWeight:'normal'}]}></Text>
        </View>
        <View>
          <Button title="Login/Continue->" color='darkgreen' onPress={() => handleLogin()} />
          {/* <Text style={style.footerColor} >Continue</Text> */}

          {login ? (
            <View></View>
          ) : (
            <BottomSheet height={400} ref={bottomSheetLogin}>
              <Login login={login} setLogin={setLogin} />
            </BottomSheet>
          )}

          {/* <BottomSheet height={400} ref={bottomSheet}>
            <Login />
         </BottomSheet> */}
        </View>
        <View>
          {/* <Button title="Go to Cart" onPress={() => bottomSheet.current.show()} /> */}
          {/* <Button title="Go to Cart" /> */}

  
          <Button
            title="Go to Cart ->" color='darkgreen' onPress={() => handleCart()}  />
          <BottomSheet height={400} ref={bottomSheetCart}>
            <View style={{flex:1}}>
            <ScrollView style={{ padding: 15 }}>
              <View style={{ marginVertical: 5 }}>
                <Text style={{ textAlign: "center", fontSize:22,borderBottomWidth:1,borderBottomColor:'lightgrey' }}>Carts Deatils</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: 10,
                }}
              >
                <View>
                  <Text style={{fontSize:18,fontWeight:450}}>Items</Text>
                </View>
                <View>
                  <Text style={{fontSize:18,fontWeight:450}}>Qty</Text>
                </View>
                <View>
                  <Text style={{fontSize:18,fontWeight:450}}>Amount</Text>
                </View>
              </View>
              <FlatList 
              data={props.realData}
              keyExtractor={(item,index)=>'key'+index}
              renderItem = {({item})=>(
                <Carts items={item} total={total} setTotal={setTotal} />
              )}
              />
              {/* {
                  props.realData.map((element,i)=>{
                    // console.log(props.realData)
                    return <Carts items={element} total={total} setTotal={setTotal} />
                  })

              } */}
              {/* <Carts />
              <Carts />
              <Carts /> */}
             
             {
              
              props.realData.length>0?(
                <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: 10,
                  borderTopWidth:1,
                  borderTopColor:'lightgrey',
                  paddingVertical:12
                }}
              >
                
                <Text style={{fontSize:18,fontWeight:"bold"}}>Total</Text>
                <Text style={{fontSize:18,fontWeight:"bold"}}>Rs. {total}</Text>
              </View>

              ):(<View><Text style={{textAlign:'center',fontSize:18,fontWeight:450}}>No Items.</Text></View>)

             }
              {/* <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: 10,
                }}
              >
                
                <Text>Total</Text>
                <Text>Total Amount{total}</Text>
              </View> */}
            </ScrollView>



            <View style={style.footer}>
                <View style={style.footerContent}>
                <View>
                    <Text style={style.footerColor}>For Checkout/Login </Text>
                </View>
                <View>
                    <Button title="Login->" color='darkgreen' onPress={() => handleLogin()} />
                    
                </View>
                </View>
            </View>
            </View>
            
            
          </BottomSheet>
          

          {/*  */}

          {/* <Text style={style.footerColor}>"----Cart"</Text> */}
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    paddingVertical: 20,
  },
  footerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footerColor: {
    color: "white",
    fontSize: 20,
    fontWeight: 500,
  },
});

export default Footer;
