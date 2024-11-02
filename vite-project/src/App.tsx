import React from 'react'
import TaskBoard from './components/TaskBoard';
import './App.css'
import logo from './assets/logo.svg';

const App: React.FC = () => {
  return(
    <div className="App">
      <header className="header">
        <nav>
          <div className="logo">
            <img src={logo} alt="BrainStorm Logo" className="logo-image"></img>
            BrainStorm
          </div>
          <div className="auth">
            <button>Вход</button>
            <button>Регистрация</button>
          </div>
        </nav>
      </header>
      <div className="header-line"></div>
      <main>
        <section className="hero">
          <h1>Удобное добавление задач</h1>
          <p>Все, что нужно для успешной работы</p>
          <button>Начать сейчас</button>
        </section>
        <TaskBoard />
      </main>
      <footer>
        <p>Политика конфиденциальности</p>
        <p>Соглашение на обработку персональных данных</p>
      </footer>
    </div>
  );
}

export default App
