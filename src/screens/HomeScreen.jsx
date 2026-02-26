import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
function HomeScreen(){
    const navigation=useNavigation();
  return  (<View>
    <Text>Home Screen</Text>
    <Button title="click 1" onPress={()=>navigation.navigate("Add")}/>
  </View>);
}
export default HomeScreen;