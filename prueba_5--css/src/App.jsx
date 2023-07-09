import './App.css'
import img_man from './assets/handsome-cheerful-man-with-happy-smile_176420-18028.avif'
import img_women from './assets/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.avif'
import img_2man from './assets/portrait-man-laughing_23-2148859448.avif'


function App() {
  const people = [
    { img: img_women, name: 'Bobbi T', job: 'THE ARTIST' },
    { img: img_man, name: 'Martin Lorentzon', job: 'THE PARTNER' },
    { img: img_2man, name: 'Andrea Ehn', job: 'THE CODER' },
  ]

  return (
    <div className='container'>

      <div className="title_container">
        <span>THE PLAYLIST</span>
      </div>

      <div className="cards_container">
        {people.map((person) => (

          <div className='card' key={person.name}>

            <img className='card_image' src={person.img} alt={person.name} />

            <div className='card_text'>
              <span className='name'>{person.name}</span>
              <span className='job'>{person.job}</span>
            </div>

          </div>

        ) )}
      </div>

    </div>
  )
}

export default App
