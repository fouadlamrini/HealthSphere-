
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '@/screens/HomeScreen';
import AddWorkoutScreen from '@/screens/AddWorkoutScreen';
import WorkoutDetailsScreen from '@/screens/WorkoutDetailsScreen';



const Stack=createNativeStackNavigator();
export default function index() {
 
  return (
    <Stack.Navigator initialRouteName="Add">
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Add" component={AddWorkoutScreen}></Stack.Screen>
      <Stack.Screen name="Detail" component={WorkoutDetailsScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
