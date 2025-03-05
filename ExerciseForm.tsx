import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import type { Exercise } from '../types';

interface ExerciseFormProps {
  onAddExercise: (exercise: Exercise) => void;
}

export function ExerciseForm({ onAddExercise }: ExerciseFormProps) {
  const [exercise, setExercise] = useState({
    name: '',
    sets: 0,
    reps: 0,
    weight: 0,
  });

  const calculateCaloriesBurned = (sets: number, reps: number, weight: number): number => {
    // Estimated calorie calculation based on general metrics
    // Formula: (sets * reps * weight * 0.075) for strength training
    const caloriesPerRep = weight * 0.075;
    return Math.round(sets * reps * caloriesPerRep);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const caloriesBurned = calculateCaloriesBurned(exercise.sets, exercise.reps, exercise.weight);
    onAddExercise({
      ...exercise,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      caloriesBurned,
    });
    setExercise({ name: '', sets: 0, reps: 0, weight: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Exercise Name
        </label>
        <input
          type="text"
          id="name"
          value={exercise.name}
          onChange={(e) => setExercise({ ...exercise, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="sets" className="block text-sm font-medium text-gray-700">
            Sets
          </label>
          <input
            type="number"
            id="sets"
            value={exercise.sets}
            onChange={(e) => setExercise({ ...exercise, sets: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="0"
          />
        </div>
        <div>
          <label htmlFor="reps" className="block text-sm font-medium text-gray-700">
            Reps
          </label>
          <input
            type="number"
            id="reps"
            value={exercise.reps}
            onChange={(e) => setExercise({ ...exercise, reps: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="0"
          />
        </div>
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            value={exercise.weight}
            onChange={(e) => setExercise({ ...exercise, weight: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="0"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <PlusCircle className="w-5 h-5 mr-2" />
        Add Exercise
      </button>
    </form>
  );
}