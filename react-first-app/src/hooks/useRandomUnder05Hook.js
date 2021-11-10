import {useEffect, useState} from "react";

export const useRandomUnder05Hook = () => {
  const [customVar, setCustomVar] = useState(Math.random());

  useEffect(() => {
    if (customVar < 0.5) {
      const oldValue = customVar;
      const newValue = Math.random();
      setCustomVar(newValue);
      console.log({oldValue, newValue});
    }
  }, [customVar]);
}