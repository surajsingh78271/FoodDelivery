import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, BackHandler } from "react-native";

const Product = (props) => {
  const [add, setAdd] = useState(false);
  const [countQty, setCountQty] = useState(0);
  const [realName, setRealName] = useState("abc")
  const [realPrice, setRealPrice] = useState(null)
  const [total, setTotal] = useState(0)
  const handleNameAdd = ()=>{
  if(props.forRender<10){
    props.setForRender(props.forRender +1)
  }else{
    props.setForRender(0)
  }
   if (countQty>0) {
     const name1 = props.items.name
     const count1 = countQty
     const price1 = props.items.offerprice
     const val = props.realData.filter((element,i)=>{
      return element.name === name1
     })
     if(val.length>0){
      val[0].qty = countQty
      val[0].amount = price1*count1
     }
     else{
      const value = {
        name:name1,
        qty:count1,
        amount:price1*count1,
        price:price1
       }
      const temp = props.realData
      temp.push(value)
      props.setRealData(temp)
     }
   }
  }

  useEffect(()=>{

  },[props.setForRender,handleNameAdd])

  return (
    <View  style={style.productContainer}>
      {/* <text>Product Listing</text> */}
      <View style={style.productContent}>
        <View style={style.productContent1Image}>
          <Image
          source={require('../assets/itemImage1.jpg')}
          style={{width:65,height:100}}
           />
          {/* <Text>Image</Text> */}
        </View>
        <View style={style.productContent2}>
          <View style={style.productContentContent}>
            <View>
              <Text style={{fontSize:25,fontWeight:'450'}}>{props.items.name}</Text>
            </View>
            <View style={{marginBottom:18}}>
              <Text style={{fontSize:15,fontWeight:'normal',color:'grey'}}>Disc {props.items.disc}</Text>
            </View>
            <View style={style.productContentContentLast}>
              <View style={style.productContentContentLastContent}>
                <View style={style.productPrice}>
                  <Text style={style.productPriceText}>
                    Rs. {props.items.offerprice}
                  </Text>
                  <Text style={style.productPriceText}><del>Rs. {props.items.price}</del></Text>
                  
                </View>
                <View style={style.productQuantity}>
                  {/* <View style={style.productQuantityContent}>
                  <Button title="Add" />

                  </View> */}

                  {add ? (
                    <View >
                      <View style={[style.productQuantityContent,{borderColor:'lightgreen',borderWidth:2}]}>
                      <Text
                        onPress={() => {
                          setCountQty(countQty + 1);
                          handleNameAdd();
                        }}
                        style={style.productQuantityContentText}
                      >
                        +
                      </Text>
                      {/* <Text style={style.productQuantityContentText}>+</Text> */}
                      <Text style={[style.productQuantityContentText,{color:'darkgreen'}]}>
                         {countQty}
                      </Text>
                      
                      <Text
                         onPress={() => {
                          if (countQty > 0) {
                            
                            setCountQty(countQty - 1);
                            handleNameAdd();
                            
                            
                          }
                        }}
                        style={style.productQuantityContentText}
                      >-</Text>
                      {/* <Text style={style.productQuantityContentText}>-</Text> */}
                      </View>
                    </View>
                  ) : (
                    <View style={[style.productQuantityContent]}>
                      <Button
                        title="Add"
                        color='green'
                        
                        onPress={() => {
                          setAdd(true);
                          handleNameAdd();
                        }}
                      />
                    </View>
                  )}

                  {/* <View style={style.productQuantityContent}>
                     
                    <Button title="+" style={style.productQuantityContentText} />
                  <Text style={style.productQuantityContentText}>+</Text> 
                  <Text style={style.productQuantityContentText}>Add Qty.</Text>
                   <Button title="-" style={style.productQuantityContentText} /> 
                  <Text style={style.productQuantityContentText}>-</Text> 
                  </View> */}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  productContainer: {
    flex: 1,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
    borderBottomWidth:1,
    borderBottomColor:'lightgrey'
    // borderBottomColor:'black'
  },
  productContent: {
    flex: 1,
    flexDirection: "row",
    // alignItems:'center'
  },
  productContent1Image: {
    marginHorizontal: 12,
    marginTop:9
  },
  productContent2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  productContentContent: {
    flex: 1,
    flexDirection: "column",
  },
  productContentContentLast: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productContentContentLastContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productPrice: {
    flex: 1,
    flexDirection: "row",
  },
  productPriceText: {
    marginRight: 20,
    fontSize:18,
    fontWeight:500
  },
  productQuantity: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 30,
  },
  productQuantityContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    // borderWidth:5,
    // borderColor:'black'
  },
  productQuantityContentText: {
    marginHorizontal: 3,
    color:'darkgreen',
    fontSize:25
    // backgroundColor:'black'
  },
});

export default Product;
