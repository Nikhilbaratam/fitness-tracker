import React from 'react';
import { Activity, Weight, Calendar, Flame } from 'lucide-react';
import type { WorkoutStats } from '../types';

interface StatsProps {
  stats: WorkoutStats;
}

export function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <Calendar className="w-8 h-8 text-blue-500" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-500">Total Workouts</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.totalWorkouts}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <Activity className="w-8 h-8 text-green-500" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-500">Total Exercises</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.totalExercises}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <Weight className="w-8 h-8 text-purple-500" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-500">Total Weight (kg)</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.totalWeight}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <Flame className="w-8 h-8 text-orange-500" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-500">Calories Burned</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.totalCaloriesBurned}</p>
          </div>
        </div>
      </div>
    </div>
  );
}