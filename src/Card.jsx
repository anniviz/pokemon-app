import './Card.css'

export default function Card({ name, frontImage, backImage }) {
  return (
    <section className="Card">
      <h2>{name}</h2>
      <img src={frontImage} alt="" />
      <img src={backImage} alt="" />
    </section>
  )
}
