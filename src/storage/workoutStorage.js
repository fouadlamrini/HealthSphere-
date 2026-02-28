import AsyncStorage from "@react-native-async-storage/async-storage";
//stocker data
const STORAGE_KEY = "WORKOUTS";
export const saveWorkouts = async (workouts) => {
  try {
    const jsonValue = JSON.stringify(workouts);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (error) {
    console.log("Error saving workouts:", error);
  }
};
//recuperer data
export const getWorkouts = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.log("Error loading workouts:", error);
    return [];
  }
};
//supprimer data
export const clearWorkouts = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.log("Error clearing workouts:", error);
  }
};