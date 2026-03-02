import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View } from "react-native";

export default function PickerInput({ 
  selectedValue, 
  onValueChange, 
  items, 
  label, 
  style 
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={[styles.picker, style]}
      >
        {items.map((item) => (
          <Picker.Item
            key={item.value}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
});
