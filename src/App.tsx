import { useAppDispatch, useAppStore } from './app/hook'
import { increment, amountAdd } from './feacture/counter/counter-slice'
import { useFetchIssusQuery } from './feacture/gitHub/gitHup-api-slice'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const count = useAppStore(state => state.counter.value);
  const dispatch = useAppDispatch()

  const { data = [], isFetching } = useFetchIssusQuery(10);

  function changeCounter() {
    // dispatch(increment())
    dispatch(amountAdd(10))
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={changeCounter}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {data.length}
      </p>
    </div>
  )
}

export default App
