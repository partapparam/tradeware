import { useState } from "react"
import NavigationBar from "./components/NavigationBar"
import "./App.css"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col relative">
      <NavigationBar />
      <h1>TradeWare</h1>
    </div>
  )
}

export default App
