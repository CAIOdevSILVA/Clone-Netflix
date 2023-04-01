import Banner from './components/Banner'
import NavBar from './components/NavBar'
import Row from './components/Row'
import { categories } from "./services/api"

import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Banner />
      {categories.map((category) => (
        <Row key={category.name} title={category.title} path={category.path} isLarge={category.isLarge}/>
      ))}
    </div>
  )
}

export default App
