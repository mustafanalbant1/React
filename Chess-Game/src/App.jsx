import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import subjectGame, { initGame } from './components/Game';

function App() {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    initGame(); // Oyun başlatılır
    const subscribe = subjectGame.subscribe(sub => {
      console.log("Game State:", sub); // Durumu kontrol etmek için
      setBoard(sub.chess);
      setIsGameOver(sub.isGameOver); // isGameOver değerini güncelle
      setResult(sub.result);

      console.log("Is Game Over:", sub.isGameOver); // Burada isGameOver değerini kontrol et
    });
    return () => subscribe.unsubscribe();
  }, []);

  return (
    <div className="bg-black h-screen flex items-center justify-center relative">
      {isGameOver ? (
        <div className="absolute bg-white bg-opacity-80 rounded-lg p-6 shadow-lg z-10">
          <h1 className="text-xl font-bold text-center mb-2">Oyun Bitti</h1>
          {result && <p className="text-center">{result}</p>}
        </div>
      ) : (
        <div className="text-white">Oyun devam ediyor...</div> // Oyun devam ederken görünmesi için
      )}
      <Board board={board} />
    </div>
  );
}

export default App;
