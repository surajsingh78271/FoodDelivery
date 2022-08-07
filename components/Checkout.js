import React,{useState,useEffect} from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    Button,
    Dimensions
  } from "react-native";
import Carts from './Carts';

function Checkout(props) {

    const [forRender1, setForRender1] = useState(0)
    const [renderingTotal1, setRenderingTotal1] = useState(0)

    const result = props.route.params[0]
    var total = props.route.params[1]
    // setRenderingTotal1(props.route.params[1])
    const setTotal = props.route.params[2]
   
    

  const handleForRender= ()=>{
    if (forRender1<10) {
        setForRender1(forRender1+1)
    }else{
        setForRender1(0)
    }
  }

  useEffect(()=>{
   
    // setRenderingTotal1(props.route.params[1])


  },[setForRender1,setRenderingTotal1])
  return (
    <View style={{ flex:1}} >
        {/* <View><Text style={{textAlign:'center'}}>Checkout</Text></View> */}
        <ScrollView style={{padding:15}}>
        <View><Text style={{textAlign:'center',fontSize:22}}>Checkout</Text></View>
            <Text style={{marginBottom:15,fontSize:15,color:'grey',borderBottomWidth:1,borderBottomColor:'lightgrey'}}>PICK UP</Text>
            <View style={{marginBottom:15}}>
                <Text style={{fontSize:16}}>Test</Text>
                <Text style={{fontSize:16}}>Daalchini Office Noida Uttar Pradesh</Text>
                <Text style={{fontSize:16}}>Order Expires within 30 mins</Text>
                
            </View>
            <Text style={{marginBottom:15,fontSize:15,color:'grey',borderBottomColor:'lightgrey'}}>CART DEATILS</Text>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                    <View><Text style={{fontSize:18,fontWeight:500}}>Items</Text></View>
                    <View><Text style={{fontSize:18,fontWeight:500}}>Qty</Text></View>
                    <View><Text style={{fontSize:18,fontWeight:500}}>Amount</Text></View>
                    
                </View>

                <FlatList 
                data={result}
                keyExtractor={(item,index)=>'key'+index}
                renderItem = {({item})=>(
                


                    <ScrollView horizontal={ Dimensions.get('window').width<500?(true):(false)  }>
                        
             
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                     <View><Text style={{fontSize:18,fontWeight:450}}> {item.name}</Text></View>
                     
                     <View >
                         <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:10,borderColor:'lightgreen',borderWidth:2}}>
                        <Text

                        onPress={()=>{
                            if (forRender1<10) {
                                setForRender1(forRender1+1)
                             }else{
                                setForRender1(0)
                             }
                             console.log(item)
                            if(item.qty>0){
                                handleForRender()
                                total = total-item.price
                                setTotal(total)
                                setRenderingTotal1(renderingTotal1-item.price)
                               
                                item.qty = item.qty -1;
                                item.amount = item.amount - item.price
                            }
                        }}
                        style={{
                            marginHorizontal: 7,
                            color:'darkgreen',
                            fontSize:25
                          }}
  

                        >-</Text>
                         <Text style={{marginHorizontal:15,fontSize:18,fontWeight:450}}> {item.qty}</Text>
                         <Text
                         onPress={()=>{
                            if (forRender1<10) {
                                setForRender1(forRender1+1)
                             }else{
                                setForRender1(0)
                             }
                             handleForRender();
                             total = total+item.price
                             setTotal(total)
                             setRenderingTotal1(renderingTotal1+item.price)
                            
                          item.qty = item.qty +1;
                          item.amount = item.amount + item.price


                         }}
                         style={{
                            marginHorizontal: 7,
                            color:'darkgreen',
                            fontSize:25
                          }}
                         
                         
                         
                         >+</Text>
                         
                         </View>
                     </View>
                     <View><Text style={{fontSize:18,fontWeight:450}}> {item.amount}</Text></View>
                     
                 </View>
          
              
  
                 </ScrollView>




                )}
                />
              {/*  
                    {
                   
                   result.map((element,i)=>{
                   return (

                    <View>
                        
             
                  <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                   <View><Text> {element.name}</Text></View>
                   
                   <View >
                       <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
                       <Button title='-' onPress={()=>{ 
                         
                         if (forRender1<10) {
                            setForRender1(forRender1+1)
                         }else{
                            setForRender1(0)
                         }
                        if(element.qty>0){
                            handleForRender()
                            total = total-element.price
                            setTotal(total)
                            setRenderingTotal1(renderingTotal1-element.price)
                           
                            element.qty = element.qty -1;
                            element.amount = element.amount - element.price
                           
                        }
                        
                     }} />
                       <Text style={{marginHorizontal:15}}> {element.qty}</Text>
                       <Button title='+' onPress={()=>{
                            if (forRender1<10) {
                            setForRender1(forRender1+1)
                         }else{
                            setForRender1(0)
                         }
                         handleForRender();
                         total = total+element.price
                         setTotal(total)
                         setRenderingTotal1(renderingTotal1+element.price)
                        
                      element.qty = element.qty +1;
                      element.amount = element.amount + element.price
                      
                       }}/>
                       </View>
                   </View>
                   <View><Text> {element.amount}</Text></View>
                   
               </View>
        
            

               </View>
               )
               

                   })
                

                    }
                    */}
                
                

                {/* <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                    <View><Text>Items</Text></View>
                    
                    <View >
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
                        <Button title='-' />
                        <Text style={{marginHorizontal:15}}>1</Text>
                        <Button title='+' />
                        </View>
                    </View>
                    <View><Text>Amount</Text></View>
                    
                </View> */}
                {
                    
                    result.length>0?(
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:20,borderTopWidth:1,borderTopColor:'lightgrey'}}>
                  <Text style={{fontSize:18,fontWeight:"bold"}}>Total</Text>
                     <Text style={{fontSize:18,fontWeight:'bold'}}>{total}</Text>
                </View>
                    ):(<View><Text style={{textAlign:'center',fontSize:16,fontWeight:500}}>No Items.</Text></View>)


                }

                 {/* <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
                  <Text>Total</Text>
                     <Text>TotalAmount{total}</Text>
                </View> */}
            </ScrollView>
        <View style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "green",
            paddingVertical: 20,
            
        }}>
            <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
            }}>
            <View><Text style={{
                color: "white",
                fontSize: 25,
                fontWeight: 500,
            }}>Select Payment</Text></View>
            {/* <View><Text></Text></View> */}
            <View><Button title='------>'  color='green' onPress={()=>{props.navigation.navigate("OrderConfirmation")}}/></View>
            </View>
            
        </View>
    </View>
  )
}

export default Checkout