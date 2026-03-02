import { useState } from "react";
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    View
} from "react-native";

import DatePicker from "../components/DatePicker";
import PickerInput from "../components/PickerInput";
import CustomTextInput from "../components/TextInput";
import {
    getWorkouts,
    saveWorkouts,
} from "../storage/workoutStorage";

export default function AddWorkoutScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");
  const [notes, setNotes] = useState("");

  const addSeance = async () => {
    if (!type || !duration || !intensity) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs obligatoires");
      return;
    }

    const newSeance = {
      id: Date.now().toString(),
      type,
      duration,
      intensity,
      date,
      notes,
    };

    try {
      // Get existing workouts
      const existingWorkouts = await getWorkouts();
      const updatedWorkouts = [...(existingWorkouts || []), newSeance];
      
      // Save all workouts
      await saveWorkouts(updatedWorkouts);
      console.log("Séance ajoutée:", newSeance);
      
      // reset form
      setType("");
      setDuration("");
      setIntensity("");
      setNotes("");
      
      // Navigate back to home
      navigation.goBack();
    } catch (error) {
      console.error("Error adding workout:", error);
      Alert.alert("Erreur", "Impossible d'ajouter la séance");
    }
  };

  const typeOptions = [
    { label: "Course", value: "course" },
    { label: "Musculation", value: "musculation" },
    { label: "Vélo", value: "velo" },
  ];

  const intensityOptions = [
    { label: "Faible", value: "faible" },
    { label: "Moyenne", value: "moyenne" },
    { label: "Élevée", value: "elevee" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une séance</Text>

      <DatePicker
        value={date}
        onChange={setDate}
        label="Date"
      />

      <PickerInput
        selectedValue={type}
        onValueChange={setType}
        items={typeOptions}
        label="Type d'activité"
      />

      <PickerInput
        selectedValue={intensity}
        onValueChange={setIntensity}
        items={intensityOptions}
        label="Intensité"
      />

      <CustomTextInput
        label="Durée (minutes)"
        value={duration}
        onChangeText={setDuration}
        placeholder="Ex: 45"
        keyboardType="numeric"
      />

      <CustomTextInput
        label="Notes (facultatif)"
        value={notes}
        onChangeText={setNotes}
        placeholder="Ex: Bonne séance"
        multiline
      />

      <View style={styles.buttonContainer}>
        <Button title="Ajouter la séance" onPress={addSeance} />
        <Button
          title="Annuler"
          onPress={() => navigation.goBack()}
          color="#888"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginVertical: 20, textAlign: "center" },
  buttonContainer: {
    marginTop: 20,
    gap: 10,
  },
});
