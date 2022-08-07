import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef} from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from "./components/Product";
import Carts from "./components/Carts";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import OrderConfirmation from "./components/OrderConfirmation";
// import { BottomSheet } from 'react-native-sheet';

const App = () => {
  // const [cart, setCart] = useState(true);
  // const [data, setData] = useState([{"name":"Mom's","disc":"ajwan is a good.","price":1}])
  const [total, setTotal] = useState(0);
    
  
  useEffect(()=>{
    Alert.alert('Food Fast Delivery','Choose Min 2 Quantity in Each for better Experince.',[{text:'OK'}]);
   alert("Choose Min 2 Quantity in Each for better Experince.")
  },[HomeScreen,Footer])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "green",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Product Listing" }}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{ title: "Product Listing" }}
        />
      </Stack.Navigator>
    </NavigationContainer>


    // <ScrollView style={style.productList}>

    //   <View style={style.headingProductListing}>
    //     <Text style={style.headingProductListingText}>Product Listing</Text>
    //   </View>

    //   <Product />
    //   <Product />
    //   <Product />

    //   {!cart ? (
    //     <View></View>
    //   ) : (
    //     <ScrollView style={{ padding: 15 }}>
    //       <View style={{ marginVertical: 5 }}>
    //         <Text style={{ textAlign: "center" }}>CartsDeatils</Text>
    //       </View>
    //       <View
    //         style={{
    //           flex: 1,
    //           flexDirection: "row",
    //           justifyContent: "space-between",
    //           alignItems: "center",
    //           margin: 10,
    //         }}
    //       >
    //         <View>
    //           <Text>Items</Text>
    //         </View>
    //         <View>
    //           <Text>Qty</Text>
    //         </View>
    //         <View>
    //           <Text>Amount</Text>
    //         </View>
    //       </View>
    //       {/* Carts start from there */}
    //       <Carts />
    //       <Carts />
    //       <Carts />

    //       <View
    //         style={{
    //           flex: 1,
    //           flexDirection: "row",
    //           justifyContent: "space-between",
    //           alignItems: "center",
    //           marginHorizontal: 10,
    //         }}
    //       >
    //         <Text>Total</Text>
    //         <Text>Total Amount</Text>
    //       </View>
    //     </ScrollView>
    //   )}
    // </ScrollView>
  );
};

const Details = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        Details
        {/* <Checkout /> */}
      </ScrollView>
     
    </View>
  );
};

const HomeScreen = (props) => {
  const [data, setData] = useState([
    {"name":"Mom's style Ajwaini Parantha","disc":"Ajwain has such a tantalising aroma and flavour that it can pep up a dish as a standalone spice.You will rea....","price":100,"offerprice":50},
  {"name":"Roasted Cereal-Wheat Jowar Bajra","disc":"Roasted Cereal-Wheat Jowar Bajra","price":21,"offerprice":1},
  {"name":"Roasted Cereal-Wheat Jowar Bajra","disc":"Roasted Cereal-Wheat Jowar Bajra","price":21,"offerprice":1},
  {"name":"Roasted Cereal-Wheat Jowar Bazra","disc":"Roasted Cereal-Wheat Jowar Bajra","price":21,"offerprice":1},
  {"name":"Roasted Cereal-Wheat Jowar Bazra","disc":"Roasted Cereal-Wheat Jowar Bajra","price":21,"offerprice":1},
  {"name":"Roasted Cereal-Wheat Jowar Bazra","disc":"Roasted Cereal-Wheat Jowar Bajra","price":21,"offerprice":1},
  {"name":"Roasted Cereal-Wheat Jowar Bazra","disc":"Roasted Cereal-Wheat Jowar Bajra","price":21,"offerprice":1
}
])
const [realData, setRealData] = useState([])
const [forRender, setForRender] = useState(0)
// const [realCount, setRealCount] = useState([])

useEffect(()=>{

},[setForRender])

  return (

    <View style={style.productList}>
      {/* <View style={style.headingProductListing}>
        <Text style={style.headingProductListingText}>Product Listing</Text>
      </View> */}

      <ScrollView>
        <FlatList 
        data={data}
        keyExtractor={(item,index)=>'key'+index}
        renderItem = {({item})=>(
          <View>
          <Product items ={item} setRealData={setRealData} realData={realData} forRender={forRender} setForRender={setForRender}/>
          
        </View>

        )}
        />
        {/* {
          data.map((Items)=>{
            return(
              <View>
                <Product items ={Items} setRealData={setRealData} realData={realData} forRender={forRender} setForRender={setForRender}/>
                
              </View>
             
            )
          })
        } */}
        
      </ScrollView>
      {/* <Button
        title="go"
        onPress={() => {
          props.navigation.navigate("Details");
        }}
      />
      HomeScreen */}

      <View>
        <Footer item={props} setRealData={setRealData} realData={realData} />
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const style = StyleSheet.create({
  productList: {
    flex: 1,

    // backgroundColor: "skyblue",
  },
  headingProductListing: {
    textAlign: "center",
  },
  headingProductListingText: {
    fontSize: 40,
  },
});
export default App;

// import { BottomSheet } from 'react-native-sheet';
// const bottomSheet = useRef(null);
{
  /* <Button title="clicked me" onPress={() => bottomSheet.current.show()} />
          <BottomSheet height={400} ref={bottomSheet}>
        <Text>Your bottom sheet content goes here</Text>
      </BottomSheet> */
}
