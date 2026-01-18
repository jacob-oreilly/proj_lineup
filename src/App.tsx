import cards from './assets/beyond_cards.json';
import './App.css'

interface Card {
  card_id: number,
  image: string,
  full_image: string
}
function App() {
  const artists = cards as Card[];
  const modules = import.meta.glob<Record<string, any>>('./assets/artist_cards/*.{jpg,jpeg,png,webp}', { eager: true });

  const images = Object.keys(modules).map((imagePath) =>{
    return modules[imagePath].default;
  });
  
  return (
    <>
      <h2>Beyond Wonderland 2026 lineup so far...</h2>
      <div className='container'>
        <div className='grid-container'>
          {/* {artists.map((card) => {
            return (
            <div className='grid-item' key={card.card_id}>
              <img src={card.image} />
            </div>
            )
          })} */}
          {images.map((src, index) => {
            return (
            <div className='grid-item' key={index}>
              <img src={src} alt={`Gallery image ${index + 1}`} />
            </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
