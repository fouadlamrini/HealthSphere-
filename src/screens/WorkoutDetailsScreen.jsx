import { Button, StyleSheet, Text, View } from "react-native";

export default function WorkoutDetailsScreen({ route, navigation }) {
  const { workout } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails de la séance</Text>
      
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Type d'activité:</Text>
        <Text style={styles.value}>{workout?.type || "Non spécifié"}</Text>
        
        <Text style={styles.label}>Durée:</Text>
        <Text style={styles.value}>{workout?.duration ? `${workout.duration} minutes` : "Non spécifiée"}</Text>
        
        <Text style={styles.label}>Intensité:</Text>
        <Text style={styles.value}>{workout?.intensity || "Non spécifiée"}</Text>
        
        <Text style={styles.label}>Notes:</Text>
        <Text style={styles.value}>{workout?.notes || "Aucune note"}</Text>
      </View>
      
      <Button 
        title="Retour" 
        onPress={() => navigation.goBack()} 
      />
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
  detailContainer: {
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    color: "#555",
  },
  value: {
    fontSize: 18,
    marginTop: 5,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
  },
});