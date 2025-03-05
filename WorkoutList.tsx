import React from 'react';
import { Trash2, Flame } from 'lucide-react';
import type { Exercise } from '../types';

interface WorkoutListProps {
  exercises: Exercise[];
  onDeleteExercise: (id: string) => void;
}

export function WorkoutList({ exercises, onDeleteExercise }: WorkoutListProps) {
  return (
    <div className="space-y-4">
      {exercises.map((exercise) => (
        <div
          key={exercise.id}
          className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{exercise.name}</h3>
            <div className="mt-1 text-sm text-gray-500">
              {exercise.sets} sets × {exercise.reps} reps @ {exercise.weight}kg
            </div>
            <div className="mt-1 flex items-center text-sm text-orange-500">
              <Flame className="w-4 h-4 mr-1" />
              {exercise.caloriesBurned} calories burned
            </div>
          </div>
          <button
            onClick={() => onDeleteExercise(exercise.id)}
            className="p-2 text-red-600 hover:text-red-800 rounded-full hover:bg-red-100 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
}