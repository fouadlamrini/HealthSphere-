import { Button, Image, ScrollView, Text,View } from "react-native";

export default function index(){
  return (<ScrollView style={{flex:1,backgroundColor:"orange"}}><Text style={{fontSize:20,fontWeight:"medium",color:"blue",textAlign:"center"}}>Hello Fouad</Text>
  <Image source={require('@/assets/images/splash-icon.png')} style={{height:500,width:500}}></Image>
  <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, facilis.</Text>
  
  <Button title="hello fouad" color={"red"} onPress={()=>console.log("clicked")}/>
  </ScrollView>)
}