import { useState } from 'react'
import './Card.css'

export default function Card({ name, frontImage, backImage, types }) {
  const [showContent, setShowContent] = useState(false)
  const [buttonText, setButtonText] = useState('show more')

  return (
    <section className="Card">
      <h2>{name}</h2>
      <button onClick={hanldeButtonClick}>{buttonText}</button>
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
    setButtonText(buttonText === 'show more' ? 'hide details' : 'show more')
  }
}
