import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function AddWorkoutScreen() {

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <View style={styles.container}>

      {/* Date */}
      <Text style={styles.label}>Date</Text>
      <Button title="Choisir la date" onPress={() => setShow(true)} />
      <Text style={{ marginTop: 5 }}>
        {date.toLocaleDateString()}
      </Text>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}

      <Text style={styles.title}>Ajouter une séance</Text>

      {/* Type d'activité */}
      <Text style={styles.label}>Type d'activité</Text>
      <Picker
        style={styles.input}
        selectedValue={type}
        onValueChange={(itemValue) => setType(itemValue)}
      >
        <Picker.Item label="Course" value="course" />
        <Picker.Item label="Musculation" value="musculation" />
        <Picker.Item label="Vélo" value="velo" />
      </Picker>

      {/* Durée */}
      <Text style={styles.label}>Durée (minutes)</Text>
      <TextInput
        value={duration}
        onChangeText={(text) => setDuration(text)}
        style={styles.input}
        placeholder="Ex: 45"
        keyboardType="numeric"
      />

      {/* Intensité */}
      <Text style={styles.label}>Intensité</Text>
      <Picker
        style={styles.input}
        selectedValue={intensity}
        onValueChange={(itemValue) => setIntensity(itemValue)}
      >
        <Picker.Item label="Faible" value="faible" />
        <Picker.Item label="Moyenne" value="moyenne" />
        <Picker.Item label="Élevée" value="elevee" />
      </Picker>

      {/* Notes */}
      <Text style={styles.label}>Notes (facultatif)</Text>
      <TextInput
        value={notes}
        onChangeText={(text) => setNotes(text)}
        style={styles.input}
        placeholder="Ex: Bonne séance"
      />

      {/* Bouton Ajouter */}
      <Button title="Ajouter la séance" onPress={() => {}} />

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