import TextField from "./components/TextField";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { useEffect, useState } from "react";

function App() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [state, setState] = useState(0);

  useEffect(() => {
    if (state === 0)
      binaryToDecimal();
    else
      decimalToBinary();
  }, [binary, decimal, state])

  const binaryHandler = (e) => {
    setState(0);
    setBinary(e.target.value);
  }

  const decimalHandler = (e) => {
    setState(1);
    setDecimal(e.target.value);
  }

  const binaryToDecimal = () => {
    if (binary !== "")
      setDecimal(parseInt(binary, 2));
    else
      setDecimal("");
  }

  const decimalToBinary = () => {
    if (decimal !== "") {
      let res = "";
      let n = parseInt(decimal);

      while (n > 0) {
        res += n%2;
        n = Math.trunc(n/2);
      }

      res = reverseString(res);

      setBinary(res);
    } else {
      setBinary("");
    }
  }

  const reverseString = (str) => {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();

    return reverseArray.join("");
  }
    

  return (
    <div className="App d-flex align-items-center">
        <div className="container d-flex flex-column p-2">
          <h1 className="mb-5">Convertisseur binaire-décimal</h1>
          <TextField id="binary" label="Nombre binaire" value={binary} handler={binaryHandler} />
          <TextField id="decimal" label="Nombre décimal" value={decimal} handler={decimalHandler} />
        </div>     
    </div>
  );
}

export default App;
