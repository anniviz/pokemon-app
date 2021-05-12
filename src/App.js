import './App.css'
import Card from './Card'
import pokemons from './data.json'

export default function App() {
  return (
    <div className="App">
      {pokemons.map(({ name, images, types, id }) => {
        return (
          <Card
            key={id}
            name={name}
            frontImage={images.front}
            backImage={images.back}
            types={types}
          ></Card>
        )
      })}
    </div>
  )
}
