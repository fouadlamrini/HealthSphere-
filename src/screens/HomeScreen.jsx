import { useEffect, useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { clearWorkouts, getWorkouts, saveWorkouts } from "../storage/workoutStorage";

export default function HomeScreen({ navigation }) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    loadWorkouts();
  }, []);

  const loadWorkouts = async () => {
    try {
      const storedWorkouts = await getWorkouts();
      setWorkouts(storedWorkouts || []);
    } catch (error) {
      console.error("Error loading workouts:", error);
      setWorkouts([]);
    }
  };

  const deleteWorkout = async (id) => {
    Alert.alert(
      "Confirmer",
      "Voulez-vous supprimer cette séance ?",
      [
        { text: "Annuler", style: "cancel" },
        {
          text: "Supprimer",
          style: "destructive",
          onPress: async () => {
            try {
              const updatedWorkouts = workouts.filter(workout => workout.id !== id);
              await saveWorkouts(updatedWorkouts);
              setWorkouts(updatedWorkouts);
            } catch (error) {
              console.error("Error deleting workout:", error);
            }
          },
        },
      ]
    );
  };

  const deleteAllWorkouts = async () => {
    Alert.alert(
      "Confirmer",
      "Voulez-vous supprimer toutes les séances ?",
      [
        { text: "Annuler", style: "cancel" },
        {
          text: "Supprimer tout",
          style: "destructive",
          onPress: async () => {
            try {
              await clearWorkouts();
              setWorkouts([]);
            } catch (error) {
              console.error("Error clearing workouts:", error);
            }
          },
        },
      ]
    );
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadWorkouts();
    });

    return unsubscribe;
  }, [navigation]);

  const renderWorkoutItem = ({ item }) => (
    <View style={styles.workoutItem}>
      <TouchableOpacity
        style={styles.workoutContent}
        onPress={() => navigation.navigate("WorkoutDetails", { workout: item })}
      >
        <Text style={styles.workoutType}>{item.type}</Text>
        <Text style={styles.workoutInfo}>{item.duration} min - {item.intensity}</Text>
        <Text style={styles.workoutDate}>
          {item.date ? new Date(item.date).toLocaleDateString() : 'Date non spécifiée'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteWorkout(item.id)}
      >
        <Text style={styles.deleteButtonText}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des séances</Text>
      
      <FlatList
        data={workouts}
        renderItem={renderWorkoutItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
      
      <View style={styles.buttonContainer}>
        <Button
          title="Ajouter une séance"
          onPress={() => navigation.navigate("AddWorkout")}
        />
        {workouts.length > 0 && (
          <Button
            title="Supprimer tout"
            onPress={deleteAllWorkouts}
            color="#ff4444"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  list: {
    flex: 1,
    marginBottom: 20,
  },
  workoutItem: {
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
  workoutContent: {
    flex: 1,
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
  workoutType: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  workoutInfo: {
    fontSize: 14,
    color: "#666",
  },
  workoutDate: {
    fontSize: 12,
    color: "#888",
    marginTop: 3,
  },
  buttonContainer: {
    gap: 10,
  },
});