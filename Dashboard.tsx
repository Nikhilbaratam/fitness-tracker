import React, { useState, useEffect } from 'react';
import { Dumbbell, LogOut } from 'lucide-react';
import { ExerciseForm } from '../components/ExerciseForm';
import { WorkoutList } from '../components/WorkoutList';
import { Stats } from '../components/Stats';
import { useAuth } from '../hooks/useAuth';
import type { Exercise, WorkoutStats } from '../types';

export function Dashboard() {
  const { signOut } = useAuth();
  const [exercises, setExercises] = useState<Exercise[]>(() => {
    const saved = localStorage.getItem('exercises');
    return saved ? JSON.parse(saved) : [];
  });

  const stats: WorkoutStats = {
    totalWorkouts: new Set(exercises.map(e => e.date.split('T')[0])).size,
    totalExercises: exercises.length,
    totalWeight: exercises.reduce((acc, curr) => acc + (curr.sets * curr.reps * curr.weight), 0),
    totalCaloriesBurned: exercises.reduce((acc, curr) => acc + curr.caloriesBurned, 0)
  };

  useEffect(() => {
    localStorage.setItem('exercises', JSON.stringify(exercises));
  }, [exercises]);

  const handleAddExercise = (exercise: Exercise) => {
    setExercises(prev => [...prev, exercise]);
  };

  const handleDeleteExercise = (id: string) => {
    setExercises(prev => prev.filter(exercise => exercise.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Dumbbell className="w-10 h-10 text-blue-600" />
            <h1 className="ml-3 text-3xl font-bold text-gray-900">Tracker Regarding Fitness</h1>
          </div>
          <button
            onClick={signOut}
            className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sign out
          </button>
        </div>

        <div className="mb-8">
          <Stats stats={stats} />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Add Exercise</h2>
          <ExerciseForm onAddExercise={handleAddExercise} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Workout History</h2>
          <WorkoutList exercises={exercises} onDeleteExercise={handleDeleteExercise} />
        </div>
      </div>
    </div>
  );
}