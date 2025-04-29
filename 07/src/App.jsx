import './App.css'
import { Provider } from 'react-redux'
import { Board } from './components/Board'
import { setupStore } from './store'

function App() {
  return (
    <Provider store={setupStore()}>
      <Board />
    </Provider>
  )
}

export default App
