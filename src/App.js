import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faPlus } from '@fortawesome/free-solid-svg-icons'
import Task from "./components/Task/Task";
import { useSelector, useDispatch } from 'react-redux'
import { newTask } from './reducers/taskReducer';
import { changeTheme } from './reducers/themeReducer'
import { changeColorsTheme } from './libs/index'

function App() {

  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const titles = ['Completada', 'Tarea', 'Acción']

  const addTask = (e) => {
    e.preventDefault();

    const task = {
      activity: 'Actividad 1',
      importance: 'Low',
    }
    dispatch(newTask(task))
  }

  const updateTheme = () => {
    dispatch(changeTheme(state.themeReducer.theme))
    changeColorsTheme(state.themeReducer.theme)
  }

  return (
    <div className="container">
      <div className="row mt-4 mb-4">
        <div className="col">
          <div className="row">
            <h1 className="ml-3">ToDo</h1>

            {(state.themeReducer.theme === 'dark') ?
              <FontAwesomeIcon icon={faMoon} className="ml-4 mt-2 fa fa-2x" onClick={() => updateTheme()} /> :
              <FontAwesomeIcon icon={faSun} className="ml-4 mt-2 fa fa-2x" onClick={() => updateTheme()} />}

          </div>
        </div>
        <div className="col text-right">
          <button type="button" className="btn-add" onClick={addTask}>
            <FontAwesomeIcon icon={faPlus} className="" />
          </button>
        </div>
      </div>

      <Task colSpan={titles.length}></Task>

      {/* <div className="table-responsive">
        <table className='table table-dark table-hover table-striped'>
          <thead>
            <tr>
              {titles.map((title, index) =>
                <th key={index}>{title}</th>
              )}
            </tr>
          </thead>
          <tbody>
            <Task colSpan={titles.length}></Task>
          </tbody>
        </table>
      </div> */}
    </div >
  );
}

export default App;
