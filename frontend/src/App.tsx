import React from 'react';
import Login from './components/Login'; // Ajusta las rutas según la ubicación de tus componentes
import TaskList from './components/TaskList';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <h1>TaskFlow - Sistema de Gestión de Tareas</h1>
      <Login />
      <Dashboard />
      <TaskList />
    </div>
  );
}

export default App;