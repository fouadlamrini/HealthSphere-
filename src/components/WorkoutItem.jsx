import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WorkoutItem({ 
  workout, 
  onPress, 
  onDelete,
  showDelete = false 
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => onPress(workout)}
      >
        <Text style={styles.type}>{workout.type}</Text>
        <Text style={styles.info}>{workout.duration} min - {workout.intensity}</Text>
        <Text style={styles.date}>
          {workout.date ? new Date(workout.date).toLocaleDateString() : 'Date non spécifiée'}
        </Text>
      </TouchableOpacity>
      
      {showDelete && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(workout.id)}
        >
          <Text style={styles.deleteButtonText}>Supprimer</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  type: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    color: "#666",
  },
  date: {
    fontSize: 12,
    color: "#888",
    marginTop: 3,
  },
  deleteButton: {
    backgroundColor: "#ff4444",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});