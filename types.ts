export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  date: string;
  caloriesBurned: number;
}

export interface Workout {
  id: string;
  date: string;
  exercises: Exercise[];
}

export interface WorkoutStats {
  totalWorkouts: number;
  totalExercises: number;
  totalWeight: number;
  totalCaloriesBurned: number;
}