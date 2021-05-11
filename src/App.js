import './App.css'
import Card from './Card'
import pokemons from './data.json'

export default function App() {
  const firstPokemon = pokemons[0]

  return (
    <div className="App">
      <Card name={firstPokemon.name}></Card>
    </div>
  )
}
