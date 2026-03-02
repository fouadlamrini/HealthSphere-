import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DatePicker({ value, onChange, label }) {
  const [show, setShow] = React.useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShow(false);
    if (event.type === 'set' && selectedDate) {
      onChange(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Button 
        title="Choisir la date" 
        onPress={() => setShow(true)} 
      />
      <Text style={styles.dateText}>
        {value ? value.toLocaleDateString() : "Date non sélectionnée"}
      </Text>
      
      {show && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
          minimumDate={new Date(2020, 0, 1)}
          maximumDate={new Date(2030, 11, 31)}
        />
      )}
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
  dateText: {
    marginTop: 5,
    fontSize: 14,
    color: "#666",
  },
});
