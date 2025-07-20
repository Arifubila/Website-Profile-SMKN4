// src/App.jsx
import { useState } from 'react';
import GuruForm from './components/GuruForm';
import GuruList from './components/GuruList';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Data Guru SMK</h1>
      <GuruForm onSukses={() => setRefresh(!refresh)} />
      <GuruList refreshTrigger={refresh} />
    </div>
  );
};

export default App;
