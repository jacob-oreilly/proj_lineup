import { useEffect } from 'react'
import cards from './assets/beyond_cards.json';
import './App.css'

interface Card {
  card_id: number,
  image: string,
  full_image: string
}
// type Artist = typeof cards
function App() {
  const artists = cards as Card[];

  return (
    <>
      <div className='container'>
        <div className='grid-container'>
          {artists.map((card) => {
            return (
            <div className='grid-item' key={card.card_id}>
              <img src={card.image} />
            </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
