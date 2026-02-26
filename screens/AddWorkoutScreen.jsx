import { Button, Text, View } from "react-native";
function AddWorkoutScreen(){
  return  (<View>
    <Text>Ajouter une séance </Text>
  <Text>Choisir Type d'activite</Text>
  <select>
    <option>course</option>
    <option>musculation</option>
    <option>vélo</option>
  </select>
  </View>);
}
export default AddWorkoutScreen;