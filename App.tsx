import React, { useState } from 'react';
import { GraduationCap, Users } from 'lucide-react';
import TeacherDashboard from './components/TeacherDashboard';
import StudentResults from './components/StudentResults';
import { Student } from './types';

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [view, setView] = useState<'teacher' | 'results'>('teacher');

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">Gestionnaire de Notes</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setView('teacher')}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  view === 'teacher'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Users className="h-5 w-5 mr-2" />
                Vue Enseignant
              </button>
              <button
                onClick={() => setView('results')}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  view === 'results'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <GraduationCap className="h-5 w-5 mr-2" />
                Résultats
              </button>
            </div>
          </div>
        </div>
      </nav>

      {view === 'teacher' ? (
        <TeacherDashboard students={students} setStudents={setStudents} />
      ) : (
        <StudentResults students={students} />
      )}
    </div>
  );
}

export default App;