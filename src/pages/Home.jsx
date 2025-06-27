import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (!name.trim()) return;
    localStorage.setItem('uno_username', name);
    navigate('/lobby');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center text-white font-mono">
      <div className="bg-white/10 p-8 rounded-lg shadow-lg text-center w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">UNO Multiplayer</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded text-black mb-4"
        />
        <button
          onClick={handleStart}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white p-2 rounded"
        >
          Join Lobby
        </button>
      </div>
    </div>
  );
}
