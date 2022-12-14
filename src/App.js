import React,{useState} from "react"
import './App.css';
import Input from './components/Input';

function App() {
  const [inPrice, setInPrice] = useState(0)
  const [curPrice, setCurPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [text, setText] = useState(null);
  const [errorIP, seterrorIP] = useState(null)
  const [errorQS, seterrorQS] = useState(null)
  

  const calculateProfit = ()=>{
    return (curPrice-inPrice)*quantity;
  }

  const calculateProfitPercentage = (profit)=>{
    return (profit/(inPrice*quantity))*100;
  }

  const calculateLoss = ()=>{
    return (inPrice-curPrice)*quantity;
  }

  const calculateLossPercentage = (loss)=>{
    return (loss/(inPrice*quantity))*100;
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
    let val = e.target.value;
    if(val <= 0){
      seterrorIP("Please enter a positive value greater than 0")
    }else{
      seterrorIP(null)
      setInPrice(val)
    }
    
  }
  
  const stockQuantity = (e)=>{
    let val = e.target.value;
    if(val <= 0){
      seterrorQS("Please enter a positive value greater than 0")
    }else{
      seterrorQS(null)
      setQuantity(val)
    }
  }
  
  const currentPrice = (e)=>{
    setCurPrice(e.target.value)
  }

  return (
    <>
    <div className="App">
      <h1>Stock Profile & Loss Calculator</h1>
      
      <Input handleChange={initialPrice} text="Initial Price" type="number"/>
      <p>{errorIP}</p>
      <Input handleChange={stockQuantity} text="Quantity of Stock" type="number"/>
      <p>{errorQS}</p>
      <Input handleChange={currentPrice} text="Current Price" type="number"/>
      
      <button onClick={displayProfitLoss}>Tell Me!</button>
      <p className="text">{text}</p>
     
    </div>
    <footer className='footer'>
      <p className="footerText">?? | 2022 | Kumari Smitha</p>
      
      <ul>
        <li><a href="https://github.com/Kumari-Smitha"><img src="github.png" alt="github"/></a></li>
        <li><a href="https://www.linkedin.com/in/kumari-smitha/"><img src="linkedin.png" alt="linkedin"/></a></li>
        <li><a href="https://twitter.com/Smita_Thakur_"><img src="twitter.png" alt="twitter"/></a></li>
      </ul>
    </footer>
    </>
  );
}

export default App;
