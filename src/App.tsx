import './App.css';
import TaskEditor from './Components/Task-editor';
import TaskList from './Components/Task-List';
import { Provider } from 'mobx-react';
import TaskStore from './Stores/TaskStore';


function App() {
  return (
    <div className="container">
      <h1>Task Manager</h1>
      <Provider TaskStore={TaskStore}>
      <TaskEditor taskStore={TaskStore}/>
      <TaskList taskStore={TaskStore} />
      </Provider>
    </div>
  );
}

export default App;
