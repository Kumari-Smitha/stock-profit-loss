import React,{useState} from "react"
import './App.css';
import Input from './components/Input';

function App() {
  const [inPrice, setInPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [curPrice, setCurPrice] = useState(0)
  const [text, setText] = useState(null);

  const calculateProfit = ()=>{
    return curPrice-inPrice;
  }

  const calculateProfitPercentage = (profit)=>{
    return (profit/inPrice)*100;
  }

  const calculateLoss = ()=>{
    return inPrice-curPrice;
  }

  const calculateLossPercentage = (loss)=>{
    return (loss/inPrice)*100;
  }

  const displayProfitLoss = ()=>{
  
    if(Number(curPrice) > Number(inPrice)){
      let profit = calculateProfit()
      let profitPer = calculateProfitPercentage(profit).toFixed(2)
      setText("Hey, you got profit of "+profit+" with "+profitPer+"%")
    } else if(Number(curPrice) === Number(inPrice)){
      setText("Sorry, you don't have any profit or loss")
    } else {
      let loss = calculateLoss()
      let lossPer = calculateLossPercentage(loss).toFixed(2)
      setText("Oops! you got loss of "+loss+" with "+lossPer+"%")
    }
    
  }
  const initialPrice = (e)=>{
    setInPrice(e.target.value)
  }
  const stockQuantity = (e)=>{
    setQuantity(e.target.value)
  }
  const currentPrice = (e)=>{
    setCurPrice(e.target.value)
  }

  return (
    <>
    <div className="App">
      <h1>Stock Profile & Loss</h1>
      <Input handleChange={initialPrice} text="Initial Price" type="number"/>
      <Input handleChange={stockQuantity} text="Quantity of Stock" type="number"/>
      <Input handleChange={currentPrice} text="Current Price" type="number"/>
      <button onClick={displayProfitLoss}>Tell Me!</button>
      <p>{text}</p>
    </div>
    <footer className='footer'>
      <p>© | 2022 | Kumari Smitha</p>
    </footer>
    </>
  );
}

export default App;
