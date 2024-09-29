import './App.css';
import React from 'react';
// window.Telegram.WebApp.

function App() {
  React.useEffect(() => {
    window.Telegram.WebApp.ready();
  }, []);

  const onClose = () => {
    window.Telegram.WebApp.close();
  }

  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
