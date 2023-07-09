
// import './App.css'
import img_man from './assets/handsome-cheerful-man-with-happy-smile_176420-18028.avif'
import img_women from './assets/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.avif'
import img_2man from './assets/portrait-man-laughing_23-2148859448.avif'

function App() {
  const people = [
    { img: img_women, name: 'Bobbi T', job: 'THE ARTIST' },
    { img: img_man, name: 'Martin Lorentzon', job: 'THE PARTNER' },
    { img: img_2man, name: 'Andrea Ehn', job: 'THE CODER' },
  ]
  document.querySelector('body').classList.add('bg-[#292929]')

  return (
    <div className='w-full h-auto flex flex-col gap-14 justify-center items-center pt-14 md:flex-row md:gap-20 md:pt-24'>

      <div className="w-[200px] h-[40px] flex justify-center items-center bg-[#62e425] rounded-full">
        <span className='text-white'>THE PLAYLIST</span>
      </div>

      <div className="w-full h-auto flex flex-col gap-4 items-start pl-[calc(50%_-_120px)] md:p-0 md:w-auto">
        {people.map((person) => (

          <div className='w-[210px] h-[80px] flex gap-5' key={person.name}>

            <img className='w-16 h-16 mt-[14px] ml-[10px]' src={person.img} alt={person.name} />

            <div className='flex flex-col justify-center'>
              <span className='text-white text-sm'>{person.name}</span>
              <span className='text-[#a5a49c] text-xs'>{person.job}</span>
            </div>

          </div>

        ) )}
      </div>

    </div>
  )
}

export default App
