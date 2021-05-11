import './Card.css'

export default function Card({ name, frontImage, backImage, types }) {
  return (
    <section className="Card">
      <h2>{name}</h2>
      <ul className="Card__types">{renderTypes(types)}</ul>
      <div className="Card__images">
        <img src={frontImage} alt="" />
        <img src={backImage} alt="" />
      </div>
    </section>
  )

  function renderTypes(types) {
    return types.map(type => (
      <li key={type} className="Card__type">
        {type}
      </li>
    ))
  }
}
