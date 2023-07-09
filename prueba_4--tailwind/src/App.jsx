// import './App.css'
import ethereum_logo from './assets/Ethereum.svg'

function App() {
  return (
        <div className="w-full h-auto max-w-[375px] min-w-[375px] flex flex-col justify-center text-center gap-5 font-['Roboto']">

          <div className="w-full h-[150px] relative">

            <svg className="absolute top-[25px] left-[50px] w-[110px] h-[110px] fill-[rgba(244,249,255,0.8)] stroke-[#bcc9d6] stroke-[0.3px]" 
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="nonzero"
        d="M11.262 2.306a1.043 1.043 0 011.476 0l8.956 8.956a1.043 1.043 0 010 1.476l-8.956 8.956a1.043 1.043 0 01-1.476 0l-8.956-8.956a1.043 1.043 0 010-1.476l8.956-8.956z"
      ></path>
            </svg>

            <svg className="absolute left-[calc(50%_-_80px)] w-[160px] h-[160px] fill-[rgba(0,119,255,0.6)] stroke-[#1a6cd1] stroke-[0.3px] z-10" 
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="nonzero"
        d="M11.262 2.306a1.043 1.043 0 011.476 0l8.956 8.956a1.043 1.043 0 010 1.476l-8.956 8.956a1.043 1.043 0 01-1.476 0l-8.956-8.956a1.043 1.043 0 010-1.476l8.956-8.956z"
      ></path>
            </svg>

            <svg className="absolute top-[25px] right-[50px] w-[110px] h-[110px] fill-[rgba(244,249,255,0.8)] stroke-[#bcc9d6] stroke-[0.3px] behind-right" 
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="nonzero"
        d="M11.262 2.306a1.043 1.043 0 011.476 0l8.956 8.956a1.043 1.043 0 010 1.476l-8.956 8.956a1.043 1.043 0 01-1.476 0l-8.956-8.956a1.043 1.043 0 010-1.476l8.956-8.956z"
      ></path>
            </svg>


          </div>

          <h1 className='text-[25px] font-medium'>ETH Tokens Claimed 🥳</h1>

          <div className='w-[300px] h-[50px] mx-auto border border-[rgb(169,169,169)] rounded-lg flex gap-[6px] justify-center items-center'>

            <span className='text-[14px]'>Balance</span>

            <div className='w-[100px] h-[27px] pl-[10px] bg-[rgba(111,175,249,0.45)] flex justify-between items-center rounded-2xl'>

              <span className='text-xs text-[#239cff]'>12000 ETH</span>

              <img className='w-[30px] h-[25px]' src={ethereum_logo} />


            </div>

            <span className="ml-5 text-xs text-[#239cff]">Transaction</span>

            <svg className='w-[17px] h-[17px] mb-[3px] text-[#239cff]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
            </svg>

          </div>

          <p className="px-[7px] mt-5 text-xs text-[#808080]">If you don&#39;t have time to be an active DAO voter, please <span className='text-black font-medium'>delegate your tokens</span> to a representative that makes your vote count.</p>

          <button className="w-[230px] h-10 mx-auto text-white text-sm bg-[linear-gradient(to_right,#13acff,#1967ff)] border-none rounded-lg">Delegate my tokens</button>

          <div className="text-sm text-[#239cff] flex justify-center items-center gap-[3px]">
            <span>Learn about ETH staking</span>
            <svg className='w-[18px] h-[18px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
            </svg>
          </div>


        </div>
  )
}

export default App
