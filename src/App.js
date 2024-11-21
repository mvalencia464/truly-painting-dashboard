import React from 'react';
import './App.css';
import PaintingContractorDashboard from './components/painting-contractor-business-model';
import PaintingSubcontractorDashboard from './dashboards/painting-subcontractor-dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Truly Painting Dashboard</h1>
        <PaintingContractorDashboard />
        <PaintingSubcontractorDashboard />
      </header>
    </div>
  );
}

export default App;
