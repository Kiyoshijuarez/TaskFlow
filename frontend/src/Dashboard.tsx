import React from 'react';

export const Dashboard = () => {
  const stats = {
    total: 10,
    completed: 7,
    pending: 3,
  };

  const percentage = Math.round((stats.completed / stats.total) * 100);

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h2>Dashboard de Métricas - TaskFlow</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem', textAlign: 'center' }}>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>{stats.total}</h3>
          <p>Total</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>{stats.completed}</h3>
          <p>Completadas</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>{stats.pending}</h3>
          <p>Pendientes</p>
        </div>
      </div>
      <div style={{ background: '#e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ width: `${percentage}%`, background: '#4caf50', height: '24px', textAlign: 'center', color: 'white', lineHeight: '24px' }}>
          {percentage}% completado
        </div>
      </div>
    </div>
  );
};