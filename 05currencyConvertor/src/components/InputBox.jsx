import React, { useId } from "react";

//useId: React Hook for generating unique IDs that can be passed to accessibility attributes.
//we don't specifically need this hook for our project though

function InputBox({
  label, //from or to
  amount, //amount from user
  onAmountChange, //called when their is change in input field
  onCurrencyChange, //called when their is change in currency field
  currencyOptions = [],
  selectCurrency = "usd", //the currency user wants to convert (default = usd)
  amountDisable = false, //to check if input field is Disabled or not (default = false) (just for good practice not neccessary for this project)
  currencyDisable = false, //to check if currency field is Disabled or not (default = false) (just for good practice not neccessary for this project)
  className = "", //className (default = empty) for CSS
}) {
  const amountInputId = useId();

  return (
    //user can also inject their own CSS if they want using className prop
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          } //checks if the onAmountChange function is present if its present then pass the value or nothing will happen
          //also we used Number(e.target.value) to make sure the value is a Number, as sometimes javascript takes these values in string formal
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} //since the value is already string we didn't used Number()
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
          {/* its better to use keys whenever we assign loop in React for better performance */}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
