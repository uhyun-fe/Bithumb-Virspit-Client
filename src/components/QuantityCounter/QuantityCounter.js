import React from "react";
import { Button } from "../../assets/styles/basic.style";

// Styles
import { Counter } from "./QuantityCounter.style";

const QuantityCounter = ({ value, setValue }) => {
   return (
      <Counter>
         <Button onClick={() => setValue(value - 1)}>-</Button>
         <input type="number" value={value} placeholder="0" onChange={({ target: { value: v } }) => setValue(v)} />
         <Button onClick={() => setValue(value + 1)}>+</Button>
      </Counter>
   );
};

export default QuantityCounter;
