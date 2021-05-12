import { useState } from 'react'
import './Card.css'

export default function Card({ name, frontImage, backImage, types }) {
  const [showContent, setShowContent] = useState(false)
  const [cardColorHue, setCardColorHue] = useState(180)

  return (
    <section
      className="Card"
      onMouseMove={event => setCardColorHue(event.clientX / 3)}
      style={{ background: 'hsl(' + cardColorHue + ', 100%, 50%)' }}
    >
      <h2>{name}</h2>
      <button onClick={hanldeButtonClick} className="Card__button">
        {showContent ? 'show more' : 'hide details'}
      </button>
      {showContent && (
        <>
          <ul className="Card__types">{renderTypes(types)}</ul>
          <div className="Card__images">
            <img src={frontImage} alt="" />
            <img src={backImage} alt="" />
          </div>
        </>
      )}
    </section>
  )

  function renderTypes(types) {
    return types.map(type => (
      <li key={type} className="Card__type">
        {type}
      </li>
    ))
  }

  function hanldeButtonClick() {
    setShowContent(!showContent)
  }
}
