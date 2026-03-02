import { useEffect, useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native";
import WorkoutItem from "../components/WorkoutItem";
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
    <WorkoutItem
      workout={item}
      onPress={(workout) => navigation.navigate("WorkoutDetails", { workout })}
      onDelete={deleteWorkout}
      showDelete={true}
    />
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
  buttonContainer: {
    gap: 10,
  },
});