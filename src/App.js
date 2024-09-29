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
      <button onClick={onClose}>Закрыть</button>
      <a>{window.Telegram.WebApp.initDataUnsafe?.user?.username}</a>
    </div>
  );
}

export default App;
