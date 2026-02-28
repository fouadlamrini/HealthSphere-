import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "WORKOUTS";
export const saveWorkouts = async (workouts) => {
  try {
    const jsonValue = JSON.stringify(workouts);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (error) {
    console.log("Error saving workouts:", error);
  }
};