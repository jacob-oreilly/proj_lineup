import cards from './assets/beyond_cards.json';
import './App.css'

interface Card {
  card_id: number,
  image: string,
  full_image: string
}
function App() {
  const artists = cards as Card[];

  return (
    <>
      <h2>Beyond Wonderland 2026 lineup so far...</h2>
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
