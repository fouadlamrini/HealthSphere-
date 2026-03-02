import { StyleSheet, Text, TextInput, View } from "react-native";

export default function CustomTextInput({ 
  label, 
  value, 
  onChangeText, 
  placeholder, 
  keyboardType = "default",
  multiline = false,
  numberOfLines = 1,
  style,
  ...props 
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, style]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        {...props}
      />
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
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});
