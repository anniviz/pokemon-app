import './Card.css'

export default function Card({ name, frontImage, backImage, types }) {
  console.log(types)
  return (
    <section className="Card">
      <h2>{name}</h2>
      <div className="Card__types">{renderTypes(types)}</div>
      <div className="Card__images">
        <img src={frontImage} alt="" />
        <img src={backImage} alt="" />
      </div>
    </section>
  )

  function renderTypes(types) {
    return types.map(type => <span className="Card__type">{type}</span>)
  }
}
