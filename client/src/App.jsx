import './App.css'
import { getContract } from "../getContract"

function App() {
  
  const handleContract = () => {
    const contract = getContract()
    console.log(contract)
  }
  return (
    <>
      <button onClick={handleContract}>Get Contract</button>
    </>
  )
}

export default App
