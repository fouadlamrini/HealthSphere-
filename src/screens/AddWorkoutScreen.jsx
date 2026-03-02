import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import {
  saveWorkouts,
} from "../storage/workoutStorage";
export default function AddWorkoutScreen({ navigation }) {
  const addSeance = async () => {
    const newSeance = {
      id: Date.now().toString(),
      type,
      duration,
      intensity,
      date,
      notes,
    };

    await saveWorkouts([newSeance]);
    console.log("Séance ajoutée:", newSeance);
    
    // reset form
    setType("");
    setDuration("");
    setIntensity("");
    setNotes("");
    
    // Navigate back to home
    navigation.goBack();
  };

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    if (event.type === 'set' && selectedDate) {
      setDate(selectedDate);
    }
  };

  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une séance</Text>

      {/* Date */}
      <Text style={styles.label}>Date</Text>
      <Button title="Choisir la date" onPress={() => setShow(true)} />
      <Text style={{ marginTop: 5 }}>{date.toLocaleDateString()}</Text>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
          minimumDate={new Date(2020, 0, 1)}
          maximumDate={new Date(2030, 11, 31)}
        />
      )}

      {/* Type d'activité */}
      <Text style={styles.label}>Type d'activité</Text>
      <Picker
        selectedValue={type}
        onValueChange={(itemValue) => setType(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Course" value="course" />
        <Picker.Item label="Musculation" value="musculation" />
        <Picker.Item label="Vélo" value="velo" />
      </Picker>

      {/* Durée */}
      <Text style={styles.label}>Durée (minutes)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 45"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />

      {/* Intensité */}
      <Text style={styles.label}>Intensité</Text>
      <Picker
        selectedValue={intensity}
        onValueChange={(itemValue) => setIntensity(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Faible" value="faible" />
        <Picker.Item label="Moyenne" value="moyenne" />
        <Picker.Item label="Élevée" value="elevee" />
      </Picker>

      {/* Notes */}
      <Text style={styles.label}>Notes (facultatif)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Bonne séance"
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      {/* Boutons */}
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
  label: { fontSize: 16, marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
});
