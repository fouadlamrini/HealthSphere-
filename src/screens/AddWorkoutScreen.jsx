import React from "react";
import { View, Text, TextInput, Picker, Button, StyleSheet } from "react-native";

export default function AddWorkoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une séance</Text>

      {/* Type d'activité */}
      <Text style={styles.label}>Type d'activité</Text>
      <Picker style={styles.input}>
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
      />

      {/* Intensité */}
      <Text style={styles.label}>Intensité</Text>
      <Picker style={styles.input}>
        <Picker.Item label="Faible" value="faible" />
        <Picker.Item label="Moyenne" value="moyenne" />
        <Picker.Item label="Élevée" value="elevee" />
      </Picker>

      {/* Notes */}
      <Text style={styles.label}>Notes (facultatif)</Text>
      <TextInput
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
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  label: { fontSize: 16, marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
});