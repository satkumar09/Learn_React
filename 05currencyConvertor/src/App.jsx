import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(""); //to set amount (default = 0)
  const [from, setFrom] = useState("usd"); //to set from (default = usd)
  const [to, setTo] = useState("inr"); //to set to (default = inr)
  const [convertedAmount, setConvertedAmount] = useState(""); //for the result (default = 0, could have used a empty string as well)

  const currencyInfo = useCurrencyInfo(from); //passing the state(currency) from which we need to convert
  //example: from usd -> to inr, this means we will pass usd in out custom hook

  const options = Object.keys(currencyInfo); // object.keys: generate array of keys, which we store into a variable // will then act as currencyOptions when sent in InputBox

  const swap = () => {
    //to swap the currency type when swap button pressed
    setFrom(to);
    setTo(from);
    // setConvertedAmount(amount)
    // setAmount(convertedAmount)
  };

  // to calculate result amount:
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to].toFixed(2));
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?w=900&t=st=1703909956~exp=1703910556~hmac=ad5a94dbea872f8b3f654cc87a997055329502d8d9ee7ed0d299bd766725e0b5')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox 
                label="To" 
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
