import './App.css'
import Row from './components/Row'
import { categories } from "./services/api"

function App() {

  return (
    <div className="App">

      {categories.map((category) => (
        <Row key={category.name} title={category.title} path={category.path} />
      ))}
    </div>
  )
}

export default App
