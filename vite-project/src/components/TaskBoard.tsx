import React from 'react';

const TaskBoard: React.FC = () => {
  return (
    <div className="task-board">
      <h2>Доска</h2>
      <div className="board-controls">
        <select>
          <option>Моя команда</option>
        </select>
        <div>
          <button>Все</button>
          <button>Мои</button>
        </div>
      </div>
      <div className="task-columns">
        <div className="column">
          <h3>Назначенные</h3>
          <div className="task-card">Исправление ошибок</div>
        </div>
        <div className="column">
          <h3>В работе</h3>
          <div className="task-card">Исправление ошибок</div>
        </div>
        <div className="column">
          <h3>Завершенные</h3>
          <div className="task-card">Исправление ошибок</div>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;