import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/src/screens/HomeScreen";
import AddWorkoutScreen from "@/src/screens/AddWorkoutScreen";
import WorkoutDetailsScreen from "@/src/screens/WorkoutDetailsScreen";

const Stack = createNativeStackNavigator();
export default function index() {
  return (
    <Stack.Navigator initialRouteName="Add">
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Add" component={AddWorkoutScreen}></Stack.Screen>
      <Stack.Screen
        name="Detail"
        component={WorkoutDetailsScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
