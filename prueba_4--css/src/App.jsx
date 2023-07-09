import './App.css'
import ethereum_logo from './assets/Ethereum.svg'

function App() {
  return (
        <div className="container">

          <div className="rhombus">

            <svg className="behind behind-left" 
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

            <svg className="middle" 
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

            <svg className="behind behind-right" 
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

          <h1>ETH Tokens Claimed 🥳</h1>

          <div className='balance'>

            <span className='balance_title'>Balance</span>

            <div className='balance_number'>

              <span className='counter-price'>12000 ETH</span>

              <img  src={ethereum_logo} />


            </div>

            <span className="balance_transaction">Transaction</span>

            <svg className='transaction_icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
            </svg>



          </div>

          {/* <div className="warning-text">
            <p>If you don&#39;t have time to be an active DAO voter, please <span>delegate your tokens</span> to a representative that makes your vote count.</p>
          </div> */}

          <p className="warning-text">If you don&#39;t have time to be an active DAO voter, please <span>delegate your tokens</span> to a representative that makes your vote count.</p>

          <button className="delegate_button">Delegate my tokens</button>

          <div className="learn-about">
            <span>Learn about ETH staking</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
            </svg>
          </div>


        </div>
  )
}

export default App
