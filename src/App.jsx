import { useState } from "react"
import Counter from "./components/Counter"
import Header from "./components/Header"
import Identity from "./components/Identity"
import FormName from "./components/FormName";
import "./style.css"

function App() {
  const [color, setColor] = useState("#ffffff");

  const changeBackgroundColor = () => {
    const changeColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(changeColor);
  }

  return (
    <>
    <div style={{backgroundColor: color, height: "100vh"}}>
      <Counter />
      <Header title = "Belajar Reactjs" />
      <Identity npm = "2428250070" name = "Fikar" github = "https://github.com/fikarpenemuan" />
      <FormName />
      <button onClick={changeBackgroundColor}>Change Background Color</button>
      </div>
    </>
  )
}

export default App
